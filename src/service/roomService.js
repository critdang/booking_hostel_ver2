const format = require("string-format");
const db = require("../models");
const { CODE } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { objToArr } = require('../utils/convert/convert');
const { COMMON_MESSAGES } = require("../constants/commonMessage");
const { sequelize } = require("../models");

const create = async (req, res) => {
  try {
    const room = req.body;
    if (!room) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, "the room"),
        CODE.INVALID
      );
    }
    const roomFetch = await db.Room.findOne({
      where: {
        name: room.name,
      },
    });
    if (roomFetch) {
      throw new AppError(
        format(COMMON_MESSAGES.EXISTED, room.name),
        CODE.EXISTED
      );
    }
    const result = await sequelize.transaction(async (t) => {
      const newRoom = await db.Room.create({ room }, { transaction: t });
      const { files } = req;
      for (const file of files) {
        const { path } = file;

        await db.roomImage.create({
          data: {
            roomId: newRoom.id,
            href: path
          }
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
module.exports = {
  create,
  getAll,
  getOne,
  update,
  deletes
};
