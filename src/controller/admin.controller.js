const format = require("string-format");
const _ = require("lodash");
const service = require("../service/admin.service");
const { CODE } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES } = require("../constants/commonMessage");
const logger = require('../logger/app-logger');
const MessageHelper = require('../utils/message');
const ResponseHelper = require('../utils/response');

const verifyUser = async (req, res) => {
  try {
    logger.info(`AdminActions:verifyUser::req.params.token - ${JSON.stringify(req.params.token)}`);
    if (_.isEmpty(req.params.token)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingToken'))
      );
    }

    await service.verifyUser(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('verifyUserSuccess'));
  } catch (error) {
    logger.info(`RoomAction:getRoom:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

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

module.exports = {
  verifyUser,
  changeBlockUserStt,
  verifyResetPassword,
  resetPassword
};
