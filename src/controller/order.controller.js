const format = require("string-format");
const _ = require("lodash");
const orderService = require("../service/order.service");
const AppError = require("../utils/errorHandle/appError");
const logger = require('../utils/logger/app-logger');

const ResponseHelper = require('../utils/response');
const MessageHelper = require('../utils/message');

const getOrder = async (req, res) => {
  try {
    logger.info(`UserAction:updateProfile::${JSON.stringify(req.params)}`);

    const data = await orderService.getOrder(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`OrderActions:getOrder:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};
const getOrders = async (req, res) => {
  try {
    const data = await orderService.getOrders(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`OrderActions:getOrders:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const changeStatus = async (req, res) => {
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

    const data = await orderService.changeStatus(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`OrderActions:changeStatus:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const updateOrder = async (req, res) => {
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

    const data = await orderService.updateOrder(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`OrderActions:changeStatus:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const createOrder = async (req, res) => {
  try {
    logger.info(`Order:getOrder::${JSON.stringify(req.body)}`);

    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), "body"),
      );
    }

    await orderService.createOrder(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('creatOrderSuccess'));
  } catch (error) {
    console.log("🚀 ~ file: order.controller.js ~ line 91 ~ createOrder ~ error", error);
    logger.error(`Order:createOrder:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const confirmCheckIn = async (req, res) => {
  try {
    logger.info(`Order:confirmCheckIn::${JSON.stringify(req?.params)}`);

    if (_.isEmpty(req?.params)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'req.params')
      );
    }

    await orderService.confirmCheckIn(req, res);
    // ResponseHelper.responseSuccess(res, MessageHelper.getMessage('confirmCheckInSuccess'));
  } catch (error) {
    console.log("🚀 ~ file: order.controller.js:110 ~ confirmCheckIn ~ error", error);
    logger.error(`Order:confirmCheckIn:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};
const viewOrder = async (req, res) => {
  try {
    await orderService.viewOrder(req, res);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getOrder,
  getOrders,
  changeStatus,
  updateOrder,
  createOrder,
  confirmCheckIn,
  viewOrder
};
