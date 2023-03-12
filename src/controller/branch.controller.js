const format = require("string-format");
const _ = require("lodash");
const service = require("../service/branch.service");
const AppError = require("../utils/errorHandle/appError");
const ResponseHelper = require('../utils/response');
const logger = require('../utils/logger/app-logger');
const MessageHelper = require('../utils/message');

const createBranch = async (req, res) => {
  try {
    logger.info(`RoomAction:createBranch::${JSON.stringify(req.body)}`);

    const data = await service.createBranch(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`RoomAction:createBranch:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const getBranches = async (req, res) => {
  try {
    logger.info(`RoomAction:getBranches::`);

    const data = await service.getBranches(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.info(`RoomAction:getBranches:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const getBranch = async (req, res) => {
  try {
    logger.info(`RoomAction:getBranch::req.params - ${JSON.stringify(req.params)}`);

    const data = await service.getBranch(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.info(`RoomAction:getBranch:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};
const updateBranch = async (req, res) => {
  try {
    logger.info(`RoomAction:updateBranch::req.body - ${JSON.stringify(req.body)}`);
    logger.info(`RoomAction:updateBranch::req.parms - ${JSON.stringify(req.parms)}`);
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

    await service.updateBranch(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('updateBranchSuccess'));
  } catch (error) {
    logger.info(`RoomAction:updateBranch:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

module.exports = {
  getBranches, getBranch, updateBranch, createBranch
};
