const format = require("string-format");
const _ = require("lodash");
const service = require("../service/user.service");
const catchAsync = require("../utils/errorHandle/catchAsync");
const { returnSuccess, returnFail } = require('../utils/helperFn');
const { CODE } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES } = require("../constants/commonMessage");

const createUser = async (req, res) => {
  try {
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(COMMON_MESSAGES.EMPTY, 'body'),
        CODE.INVALID
      );
    }
    const data = await service.createUser(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const login = catchAsync(async (req, res) => {
  try {
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, 'body'),
        CODE.INVALID
      );
    }
    const data = await service.login(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (e) {
    return returnFail(req, res, e);
  }
});

const forgotPassword = catchAsync(async (req, res) => {
  try {
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, 'body'),
        CODE.INVALID
      );
    }
    await service.forgotPassword(req, res);
    return returnSuccess(req, res, CODE.SUCCESS, 'An email sent to you, please check the mail to reset password');
  } catch (e) {
    return returnFail(req, res, e);
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
