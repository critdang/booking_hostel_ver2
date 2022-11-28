const format = require("string-format");
const _ = require("lodash");
const service = require("../service/user.service");
const catchAsync = require("../utils/errorHandle/catchAsync");
const AppError = require("../utils/errorHandle/appError");
const ResponseHelper = require('../utils/response');
const MessageHelper = require('../utils/message');
const logger = require('../utils/logger/app-logger');

const createUser = async (req, res) => {
  try {
    logger.info(`UserAuthentication:createUser::${JSON.stringify(req.body)}`);

    const data = await service.createUser(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`UserAuthentication:createUser:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const login = async (req, res) => {
  try {
    logger.info(`UserAuthentication:login::${JSON.stringify(req.body)}`);

    const data = await service.login(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    console.log("🚀 ~ file: user.controller.js ~ line 29 ~ login ~ error", error);
    logger.error(`UserAuthentication:login:: -  ${error}`);
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

const forgotPassword = catchAsync(async (req, res) => {
  try {
    logger.info(`UserAction:forgotPassword::${JSON.stringify(req.body)}`);
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'body')
      );
    }

    await service.forgotPassword(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('requestForgotPasswordSuccess'));
  } catch (error) {
    logger.error(`UserAction:forgotPassword:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
});

const updateProfile = catchAsync(async (req, res) => {
  try {
    logger.info(`UserAction:updateProfile::${JSON.stringify(req.params)}`);
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'body')
      );
    }

    await service.updateProfile(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('updateProfileSuccess'));
  } catch (error) {
    logger.error(`UserAction:updateProfile:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
});

const updateAvatar = async (req, res) => {
  try {
    logger.info(`UserAction:updateAvatar::${JSON.stringify(req.file)}`);
    if (_.isEmpty(req.file)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), req.file)
      );
    }

    await service.updateAvatar(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('updateAvatarSuccess'));
  } catch (error) {
    logger.error(`UserAction:updateAvatar:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const getUser = catchAsync(async (req, res) => {
  try {
    logger.info(`UserAction:forgotPassword::${JSON.stringify(req.params)}`);

    const data = await service.getUser(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`UserAction:getUser:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
});

const getUsers = catchAsync(async (req, res) => {
  try {
    logger.info(`UserAction:getUsers::`);

    const data = await service.getUsers(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`UserAction:getUser:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
});

module.exports = {
  createUser, login, handleRefeshToken, forgotPassword, updateProfile, updateAvatar, getUser, getUsers
};
