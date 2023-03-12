const format = require("string-format");
const { Op } = require('sequelize');
const db = require("../models");
const AppError = require("../utils/errorHandle/appError");
const { sequelize } = require("../models");
const MessageHelper = require('../utils/message');
const admin = require('../config/configFirebase');

const createRoom = async (req) => {
  const inputData = req.body;
  let newRoomData;
  await sequelize.transaction(async (t) => {
    // create room
    const newRoom = await db.Room.create(inputData, { transaction: t });
    newRoomData = newRoom;
    // upload image
    const { files } = req;
    for (const file of files) {
      const { path } = file;
      let newImage;
      if (file == files[0]) {
        newImage = await db.Image.create({
          href: path,
          isDefault: true
        }, { transaction: t });
      } else {
        newImage = await db.Image.create({
          href: path
        }, { transaction: t });
      }

      await db.RoomImage.create({
        roomId: newRoom.id,
        imageId: newImage.id
      }, { transaction: t });
    }
  });
  return newRoomData;
};

const getRooms = async (req) => {
  // const sort = objToArr(req.query);
  const conditions = req.query;
  const roomFetch = await db.Room.findAll(
    {
      where: conditions,
      // invoice: sort
    }
  );
  if (!roomFetch) {
    throw new AppError(
      format(MessageHelper.getMessage('cannotFindRoomCategory')),
    );
  }
  return roomFetch;
};

const getRoom = async (req) => {
  const { id } = req.params;
  const roomFetch = await db.Room.findAll({
    where: { id },
  });
  if (roomFetch.length === 0) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundRoom'), id),
    );
  }
  return roomFetch;
};

const searchRooms = async (req) => {
  let {
    // eslint-disable-next-line prefer-const
    arrival, departure, adults, kids
  } = req.query;
  adults = adults.split(',');
  kids = kids.split(',');
  const rooms = [];
  for (let i = 0; i < adults.length; i += 1) {
    const foundRoom = await db.Room.findAll({
      where: {
        [Op.and]: [
          { adult: { [Op.gte]: adults[i] } },
          { kid: { [Op.gte]: kids[i] } },
        ],
      },
      attributes: ['id', 'name', 'price'],
      group: ['name'], // should group else it will return duplicate and res.json remove empty array
      include: [{
        model: db.RoomDate,
        where: {
          [Op.or]: [
            {
              from: {
                [Op.gte]: departure
              },
            },
            {
              to: {
                [Op.lte]: arrival
              },
            }
          ]
        },
        attributes: [],
      }],
      raw: true,
      nest: true,
    });
    rooms.push(foundRoom);
  }
  return rooms;
};

const updateRoom = async (req) => {
  const { id } = req.params;
  const updateContents = req.body;
  const result = await db.Room.update(
    updateContents,
    {
      where: { id },
    }
  );
  if (result[0] === 0) {
    throw new AppError(
      format(MessageHelper.getMessage('noRoomUpdated'))
    );
  }
};

const deleteRoom = async (req) => {
  const { id } = req.params;
  await sequelize.transaction(async (t) => {
    const foundRoom = await db.Room.findOne({ where: { id } });
    if (!foundRoom) {
      throw new AppError(
        format(MessageHelper.getMessage('noFoundRoom'), id),
      );
    }
    await db.RoomImage.destroy({ where: { roomId: id } }, { transaction: t });
    await db.Room.destroy({ where: { id } }, { transaction: t });
  });
};

const defaultImage = async (req) => {
  const { imgId } = req.params;

  const foundProduct = await db.RoomImage.findMany({ where: { id: imgId } });
  if (!foundProduct) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundImageRoom'), imgId),
    );
  }

  const { productId, id } = await db.RoomImage.update({ isDefault: true }, { where: { id: +imgId } });
  await db.RoomImage.update({ isDefault: false }, { where: { productId, NOT: { id } } }); // removeIsDefault
};

const deleteImage = async (req) => {
  const { roomId, imgId } = req.params;
  const foundImg = await db.RoomImage.findOne({
    where: { imageId: imgId, roomId },
  });

  if (!foundImg) {
    throw new AppError(
      format(MessageHelper.getMessage('noDeleteImageRoom'), roomId),
    );
  }
  await foundImg.destroy();
};

const reviewRoom = async (req, res) => {
  const dbFireBase = admin.database();
  const reviewsRef = dbFireBase.ref('reviews');
  // const review = reviewsRef.child('review');
  const images = req.files;
  // create data to REVIEW_IMAGE table
  const reviewImages = [];
  for (const image of images) {
    reviewImages.push(image.path);
  }

  // push images and data together
  const inputData = { ...req.body, images: reviewImages };

  const newReview = reviewsRef.push(inputData);

  return res.status(200).json(newReview);
};

module.exports = {
  createRoom,
  getRooms,
  getRoom,
  searchRooms,
  updateRoom,
  deleteRoom,
  defaultImage,
  deleteImage,
  reviewRoom
};
