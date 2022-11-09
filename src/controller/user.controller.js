const format = require("string-format");
const _ = require("lodash");
const service = require("../service/user.service");
const catchAsync = require("../utils/errorHandle/catchAsync");
const { returnSuccess, returnFail } = require('../utils/helperFn');
const { CODE } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES } = require("../constants/commonMessage");
const ResponseHelper = require('../utils/response');
const MessageHelper = require('../utils/message');
const logger = require('../logger/app-logger');

const createUser = async (req, res) => {
  try {
    logger.info(`UserAuthentication:create::${JSON.stringify(req.body)}`);

    const data = await service.createUser(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`UserAuthentication:login:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const login = async (req, res) => {
  try {
    logger.info(`UserAuthentication:login::${JSON.stringify(req.body)}`);

    const data = await service.login(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`UserAuthentication:login:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const forgotPassword = catchAsync(async (req, res) => {
  try {
    logger.info(`UserAction:forgotPassword::${JSON.stringify(req.body)}`);
    await service.forgotPassword(req, res);
    return returnSuccess(req, res, CODE.SUCCESS, 'An email sent to you, please check the mail to reset password');
  } catch (e) {
    console.log("🚀 ~ file: user.controller.js ~ line 43 ~ forgotPassword ~ e", e);
    // return returnFail(req, res, e);
  }
});

const updateProfile = catchAsync(async (req, res) => {
  try {
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, 'body'),
        CODE.INVALID
      );
    }
    const data = await service.updateProfile(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, COMMON_MESSAGES.UPDATE_USER_SUCCESS);
  } catch (e) {
    return returnFail(req, res, e);
  }
});

const updateAvatar = catchAsync(async (req, res) => {
  try {
    if (_.isEmpty(req.file)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, 'file'),
        CODE.INVALID
      );
    }
    const data = await service.updateAvatar(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, COMMON_MESSAGES.UPDATE_AVATAR_SUCCESS);
  } catch (e) {
    return returnFail(req, res, e);
  }
});

const getUser = catchAsync(async (req, res) => {
  try {
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, 'param'),
        CODE.INVALID
      );
    }
    const data = await service.getUser(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (e) {
    return returnFail(req, res, e);
  }
});

const getUsers = catchAsync(async (req, res) => {
  try {
    const data = await service.getUsers(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (e) {
    return returnFail(req, res, e);
  }
});

module.exports = {
  createUser, login, forgotPassword, updateProfile, updateAvatar, getUser, getUsers
};
