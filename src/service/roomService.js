const format = require("string-format");
const db = require("../models");
const { CODE } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { objToArr } = require('../utils/convert/convert');
const { COMMON_MESSAGES } = require("../constants/commonMessage");
const { sequelize } = require("../models");

const create = async (req) => {
  try {
    const {
      name, detail, description, price, reserve, hot, active, categoryId
    } = req.body;
    if (!name) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, "Please use another name"),
        CODE.INVALID
      );
    }
    const roomFetch = await db.Room.findOne({
      where: { name },
    });
    if (roomFetch) {
      throw new AppError(
        format(COMMON_MESSAGES.EXISTED, name),
        CODE.EXISTED
      );
    }
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
  } catch (error) {
    return error;
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, id),
        CODE.INVALID
      );
    }
    const roomFetch = await db.Room.findAll({
      where: { id },
    });
    if (roomFetch.length === 0) {
      throw new AppError(
        format(COMMON_MESSAGES.NOT_FOUND, id),
        CODE.NOT_FOUND
      );
    }
    return roomFetch;
  } catch (error) {
    return error;
  }
};

const getAll = async (req, res) => {
  const sort = objToArr(req.query);
  try {
    const roomFetch = await db.Room.findAll({ order: sort });
    if (!roomFetch) {
      throw new AppError(
        format(COMMON_MESSAGES.ERROR, roomFetch),
        CODE.ERROR
      );
    }
    return roomFetch;
  } catch (error) {
    return error;
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updateContents = req.body;
    if (!id) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, id),
        CODE.INVALID
      );
    }
    const result = await db.Room.update(
      updateContents,
      {
        where: { id },
      }
    );
    if (result[0] === 0) {
      throw new AppError(
        format(COMMON_MESSAGES.NOT_FOUND, id),
        CODE.NOT_FOUND
      );
    }
    return "update success";
  } catch (error) {
    return error;
  }
};

const deletes = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, id),
        CODE.INVALID
      );
    }
    await db.Room.destroy(
      {
        where: { id },
      }
    ).then((result) => {
      if (result === 0) {
        throw new AppError(
          format(COMMON_MESSAGES.NOT_FOUND, id),
          CODE.NOT_FOUND
        );
      }
    });
    return "delete success";
  } catch (error) {
    return error;
  }
};

const defaultImage = async (req, res) => {
  const { imgId } = req.params;
  if (!imgId) return helperFn.returnFail(req, res, ERROR.PROVIDE_DEFAULT_IMAGE_ID);

  try {
    const foundProduct = await db.productImage.findMany({ where: { id: +imgId } });
    if (!foundProduct) return helperFn.returnFail(req, res, ERROR.NO_IMAGE_FOUND);

    const { productId, id } = await prisma.productImage.update({ where: { id: +imgId }, data: { isDefault: true } });
    await prisma.productImage.updateMany({ where: { productId, NOT: { id } }, data: { isDefault: false } }); // removeIsDefault
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  deletes,
  defaultImage
};
