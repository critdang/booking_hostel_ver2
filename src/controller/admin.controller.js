const format = require("string-format");
const _ = require("lodash");
const service = require("../service/admin.service");
const { CODE } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES } = require("../constants/commonMessage");
const logger = require('../utils/logger/app-logger');
const MessageHelper = require('../utils/message');
const ResponseHelper = require('../utils/response');

const changeBlockUserStt = async (req, res) => {
  try {
    logger.info(`AdminActions:changeBlockUserStt::req.params - ${JSON.stringify(req.params)}`);
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, req.params),
        CODE.INVALID
      );
    }
    const data = await service.changeBlockUserStt(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.info(`AdminActions:changeBlockUserStt:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const verifyResetPassword = async (req, res) => {
  try {
    logger.info(`AdminActions:verifyResetPassword::req.params - ${JSON.stringify(req.params)}`);
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, req.params),
        CODE.INVALID
      );
    }
    await service.verifyResetPassword(req, res);
  } catch (error) {
    logger.info(`AdminActions:verifyResetPassword:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const resetPassword = async (req, res) => {
  try {
    logger.info(`AdminActions:resetPassword::req.body - ${JSON.stringify(req.body)}`);
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, req.body),
        CODE.INVALID
      );
    }

    await service.resetPassword(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('resetPasswordSucess'));
  } catch (error) {
    logger.info(`AdminActions:resetPassword:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};
const handleRefeshToken = async (req, res) => {
  try {
    // logger.info(`UserAuthentication:login::${JSON.stringify(req.cookies)}`);

    const data = await service.handleRefeshToken(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    console.log("🚀 ~ file: user.controller.js ~ line 42 ~ handleRefeshToken ~ error", error);
    logger.error(`UserAuthentication:login:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};
const rating = async (req, res) => {
  try {
    await service.rating(req, res);
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, req.body),
        CODE.INVALID
      );
    }

    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('ratingSuccess'));
  } catch (error) {
    logger.info(`AdminActions:rating:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const logOut = async (req, res) => {
  try {
    await service.logOut(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('logOutSuccess'));
  } catch (error) {
    logger.info(`AdminActions:logOut:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

module.exports = {
  changeBlockUserStt,
  verifyResetPassword,
  resetPassword,
  handleRefeshToken,
  logOut,
  rating
};
