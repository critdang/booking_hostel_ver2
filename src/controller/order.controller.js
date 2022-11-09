const format = require("string-format");
const _ = require("lodash");
const service = require("../service/order.service");
const catchAsync = require("../utils/errorHandle/catchAsync");
const AppError = require("../utils/errorHandle/appError");
const logger = require('../utils/logger/app-logger');

const ResponseHelper = require('../utils/response');
const MessageHelper = require('../utils/message');

const getOrder = catchAsync(async (req, res) => {
  try {
    logger.info(`UserAction:updateProfile::${JSON.stringify(req.params)}`);

    const data = await service.getOrder(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`OrderActions:getOrder:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
});
const getOrders = catchAsync(async (req, res) => {
  try {
    const data = await service.getOrders(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`OrderActions:getOrders:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
});

const changeStatus = catchAsync(async (req, res) => {
  try {
    logger.info(`OrderActions:changeStatus::req.parms - ${JSON.stringify(req.parms)}`);
    logger.info(`OrderActions:changeStatus::req.body - ${JSON.stringify(req.body)}`);
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

    const data = await service.changeStatus(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`OrderActions:changeStatus:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
});

const updateOrder = catchAsync(async (req, res) => {
  try {
    logger.info(`OrderActions:updateOrder::req.parms - ${JSON.stringify(req.parms)}`);
    logger.info(`OrderActions:updateOrder::req.body - ${JSON.stringify(req.body)}`);
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

    const data = await service.updateOrder(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`OrderActions:changeStatus:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
});

module.exports = {
  getOrder,
  getOrders,
  changeStatus,
  updateOrder
};
