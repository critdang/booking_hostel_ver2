const format = require("string-format");
const _ = require("lodash");
const service = require("../service/userService");
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
    const result = await service.forgotPassword(req, res);
    return returnSuccess(req, res, CODE.SUCCESS, 'An email sent to you, please check the mail to reset password');
  } catch (e) {
    return returnFail(req, res, e);
  }
});

module.exports = { createUser, login, forgotPassword };
