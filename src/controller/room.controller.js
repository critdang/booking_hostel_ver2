const format = require("string-format");
const _ = require("lodash");
const roomService = require("../service/roomService");
const { returnSuccess, returnFail } = require("../utils/helperFn");
const { CODE, ERROR } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES } = require("../constants/commonMessage");

const create = async (req, res) => {
  try {
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(COMMON_MESSAGES.EMPTY, req.body),
        ERROR.NODATA
      );
    }
    const data = await roomService.create(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (error) {
    return returnFail(req, res, error);
  }
};
const getAll = async (req, res) => {
  try {
    const data = await roomService.getAll(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const getOne = async (req, res) => {
  try {
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, req.params),
        CODE.INVALID
      );
    }
    const data = await roomService.getOne(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const update = async (req, res) => {
  try {
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(COMMON_MESSAGES.EMPTY, "body"),
        ERROR.NODATA
      );
    }
    const data = await roomService.update(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const deletes = async (req, res) => {
  try {
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, req.params),
        CODE.INVALID
      );
    }
    const data = await roomService.deletes(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
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
