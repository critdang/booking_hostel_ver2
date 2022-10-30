const format = require("string-format");
const db = require("../models");
const { returnSuccess, returnFail } = require("../utils/helperFn");
const { CODE } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { convertValue, objToArr } = require('../utils/convert/convert');
const { COMMON_MESSAGES } = require("../constants/commonMessage");

const create = async (req, res) => {
  try {
    const room = convertValue(req.body);
    if (!room) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, "the room"),
        CODE.INVALID
      );
    }
    const roomFetch = await db.Room.findOne({
      where: {
        roomName: room.roomName,
      },
    });
    if (roomFetch) {
      throw new AppError(
        format(COMMON_MESSAGES.EXISTED, room.roomName),
        CODE.EXISTED
      );
    }
    const newRoom = await db.Room.create(room);
    return returnSuccess(req, res, CODE.SUCCESS, newRoom);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const getOne = async (req, res) => {
  try {
    const { fieldname, value } = req.params;
    if (!fieldname || !value) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, fieldname),
        CODE.INVALID
      );
    }
    const condition = {};
    condition[fieldname] = value;
    const roomFetch = await db.Room.findAll({
      where: condition,
    });
    if (roomFetch.length === 0) {
      throw new AppError(
        format(COMMON_MESSAGES.NOT_FOUND, value),
        CODE.NOT_FOUND
      );
    }
    return returnSuccess(req, res, CODE.SUCCESS, roomFetch);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const getAll = async (req, res) => {
  const sort = objToArr(convertValue(req.query));
  try {
    const roomFetch = await db.Room.findAll({ order: sort });
    if (!roomFetch) {
      throw new AppError(
        format(COMMON_MESSAGES.ERROR, roomFetch),
        CODE.ERROR
      );
    }
    return returnSuccess(req, res, CODE.SUCCESS, roomFetch);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const update = async (req, res) => {
  try {
    const { fieldname, value } = req.params;
    const updateContents = convertValue(req.body);
    if (!fieldname || !value) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, value),
        CODE.INVALID
      );
    }
    const condition = {};
    condition[fieldname] = value;
    await db.Room.update(
      updateContents,
      {
        where: condition,
      }
    ).then((result) => {
      if (result[0] === 0) {
        throw new AppError(
          format(COMMON_MESSAGES.NOT_FOUND, value),
          CODE.NOT_FOUND
        );
      }
    });

    return returnSuccess(req, res, CODE.SUCCESS, "update success");
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const deletes = async (req, res) => {
  try {
    const { fieldname, value } = req.params;
    if (!fieldname || !value) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, value),
        CODE.INVALID
      );
    }
    const condition = {};
    condition[fieldname] = value;
    await db.Room.destroy(
      {
        where: condition,
      }
    ).then((result) => {
      if (result === 0) {
        throw new AppError(
          format(COMMON_MESSAGES.NOT_FOUND, value),
          CODE.NOT_FOUND
        );
      }
    });
    return returnSuccess(req, res, CODE.SUCCESS, "delete success");
  } catch (error) {
    return returnFail(req, res, error);
  }
};
module.exports = {
  create,
  getAll,
  getOne,
  update,
  deletes
};
