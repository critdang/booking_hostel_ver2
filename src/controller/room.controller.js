const format = require("string-format");
const _ = require("lodash");
const service = require("../service/room.service");
const AppError = require("../utils/errorHandle/appError");
const ResponseHelper = require('../utils/response');
const logger = require('../utils/logger/app-logger');
const MessageHelper = require('../utils/message');

const createRoom = async (req, res) => {
  try {
    logger.info(`RoomAction:createRoom::${JSON.stringify(req.body)}`);

    const data = await service.createRoom(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`RoomAction:createRoom:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const getRooms = async (req, res) => {
  try {
    logger.info(`RoomAction:getRooms::`);

    const data = await service.getRooms(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.info(`RoomAction:getRooms:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const getRoom = async (req, res) => {
  try {
    logger.info(`RoomAction:getRoom::req.params - ${JSON.stringify(req.params)}`);

    const data = await service.getRoom(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.info(`RoomAction:getRoom:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const searchRooms = async (req, res) => {
  try {
    logger.info(`RoomAction:getRoom::req.params - ${JSON.stringify(req.params)}`);
    const data = await service.searchRooms(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.info(`RoomAction:getRoom:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const updateRoom = async (req, res) => {
  try {
    logger.info(`RoomAction:updateRoom::req.body - ${JSON.stringify(req.body)}`);
    logger.info(`RoomAction:updateRoom::req.parms - ${JSON.stringify(req.parms)}`);
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'body')
      );
    }
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'req.params')
      );
    }
    await service.updateRoom(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('updateRoomSuccess'));
  } catch (error) {
    logger.info(`RoomAction:updateRoom:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const deleteRoom = async (req, res) => {
  try {
    logger.info(`RoomAction:deleteRoom::req.params - ${JSON.stringify(req.params)}`);
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'params')
      );
    }

    await service.deleteRoom(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('deleteRoomSuccess'));
  } catch (error) {
    logger.info(`RoomAction:updateRoom:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const defaultImage = async (req, res) => {
  try {
    logger.info(`RoomAction:defaultImage::req.params - ${JSON.stringify(req.params)}`);
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'params')
      );
    }

    await service.defaultImage(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('setDefaultImageRoomSuccess'));
  } catch (error) {
    logger.info(`RoomAction:defaultImage:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const deleteImage = async (req, res) => {
  try {
    logger.info(`RoomAction:deleteImage::req.params - ${JSON.stringify(req.params)}`);
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'params')
      );
    }

    await service.deleteImage(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('deleteImageRoomSuccess'));
  } catch (error) {
    logger.info(`RoomAction:deleteImage:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const reviewRoom = async (req, res) => {
  try {
    logger.info(`RoomAction:reviewRoom::${JSON.stringify(req.body)}`);

    const data = await service.reviewRoom(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`RoomAction:reviewRoom:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
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
