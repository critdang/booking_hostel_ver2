const format = require("string-format");
const { Op } = require('sequelize');
const moment = require('moment');
const db = require("../models");
const AppError = require("../utils/errorHandle/appError");
const { objToArr } = require('../utils/convert/convert');
const { sequelize } = require("../models");
const MessageHelper = require('../utils/message');

const createRoom = async (req) => {
  const {
    name, detail, description, price, reserve, hot, active, categoryId
  } = req.body;
  await sequelize.transaction(async (t) => {
    const newRoom = await db.Room.create({
      name,
      detail,
      description,
      price,
      reserve,
      hot,
      active,
      categoryId
    }, { transaction: t });

    const { files } = req;
    for (const file of files) {
      // upload to Image table
      const { path } = file;
      const newImage = await db.Image.create({
        href: path
      }, { transaction: t });
      // point to RoomImage table
      await db.RoomImage.create({
        roomId: newRoom.id,
        imageId: newImage.id
      }, { transaction: t });
    }
    return newRoom;
  });
};

const getRooms = async (req) => {
  // const sort = objToArr(req.query);
  const conditions = req.query;
  const roomFetch = await db.Room.findAll(
    {
      where: conditions,
      // order: sort
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
    console.log("🚀 ~ file: room.service.js ~ line 111 ~ searchRooms ~ foundRoom", foundRoom);
    rooms.push(foundRoom);
  }
  return rooms;
  // const foundRoom = await db.RoomDate.findAll({
  //   where: {
  //     [Op.or]: [
  //       {
  //         from: {
  //           [Op.gte]: departure
  //         },
  //       },
  //       {
  //         to: {
  //           [Op.lte]: arrival
  //         },
  //       }
  //     ]
  //   },
  //   attributes: ['from', 'to'],
  // });
  // foundRoom.forEach((item) => {
  //   item.from = moment(item.from).format('YYYY-MM-DD');
  //   item.to = moment(item.to).format('YYYY-MM-DD');
  // });

  // const roomDates = {};
  // for (const cartRoom of foundOrderRooms) {
  //   const { checkIn, checkOut } = cartRoom;
  //   const { id, name, price } = cartRoom.Room;
  //   // array contain all dates of each room
  //   if (!roomDates[name]) {
  //     const roomDate = await db.RoomDate.findAll({
  //       where: { roomId: id },
  //       attributes: ['from', 'to'],
  //     });
  //     if (_.isEmpty(roomDate)) {
  //       throw new AppError(
  //         format(MessageHelper.getMessage('noFoundRoomDate'), id),
  //       );
  //     }
  //     roomDates[name] = roomDate;
  //   }
  //   // compare booking date with room date
  //   for (const date in roomDates[name]) {
  //     if ((checkIn > date.from && checkIn < date.to) || (checkOut > date.from && checkOut < date.to)) {
  //       throw new AppError(
  //         format(MessageHelper.getMessage('roomUnavailable'), name),
  //       );
  //     }
  //   }
  // }
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

module.exports = {
  createRoom,
  getRooms,
  getRoom,
  searchRooms,
  updateRoom,
  deleteRoom,
  defaultImage,
  deleteImage,
};
