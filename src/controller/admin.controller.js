const format = require("string-format");
const _ = require("lodash");
const service = require("../service/adminService");
const catchAsync = require("../utils/errorHandle/catchAsync");
const { returnSuccess, returnFail } = require('../utils/helperFn');
const { CODE } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES } = require("../constants/commonMessage");

const verifyUser = async (req, res) => {
  try {
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, req.params),
        CODE.INVALID
      );
    }
    const data = await service.verifyUser(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const changeBlockUserStt = async (req, res) => {
  try {
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, req.params),
        CODE.INVALID
      );
    }
    const data = await service.changeBlockUserStt(req, res);
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const verifyResetPassword = async (req, res) => {
  try {
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, req.params),
        CODE.INVALID
      );
    }
    await service.verifyResetPassword(req, res);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const resetPassword = async (req, res) => {
  try {
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, req.body),
        CODE.INVALID
      );
    }
    await service.resetPassword(req, res);
    return returnSuccess(req, res, CODE.SUCCESS, 'Reset password successfully');
  } catch (error) {
    return returnFail(req, res, error);
  }
};

module.exports = {
  verifyUser,
  changeBlockUserStt,
  verifyResetPassword,
  resetPassword
};
