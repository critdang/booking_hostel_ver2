const format = require("string-format");
const _ = require("lodash");
const logger = require('../utils/logger/app-logger');
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES } = require("../constants/commonMessage");
const { CODE } = require("../constants/code");
const ResponseHelper = require('../utils/response');
const service = require("../service/team.service");
const MessageHelper = require('../utils/message');

const deleteUser = async (req, res) => {
  try {
    console.log("🚀 ~ file: team.controller.js:15 ~ deleteUser ~ req.params:", req.params);
    logger.info(`AdminActions:deleteUser::req.params - ${JSON.stringify(req.params)}`);
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, req.params),
        CODE.INVALID
      );
    }
    await service.deleteUser(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('deleteUserInTeamSuccess'));
  } catch (error) {
    logger.info(`AdminActions:logOut:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

module.exports = {
  deleteUser,
};
