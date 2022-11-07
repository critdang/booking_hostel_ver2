const format = require("string-format");
const _ = require("lodash");
const service = require("../service/order.service");
const catchAsync = require("../utils/errorHandle/catchAsync");
const { returnSuccess, returnFail } = require('../utils/helperFn');
const { CODE } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES } = require("../constants/commonMessage");

const getOrder = catchAsync(async (req, res) => {
  try {
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, 'params'),
        CODE.INVALID
      );
    }
    const data = await service.getOrder(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (e) {
    return returnFail(req, res, e);
  }
});
const getOrders = catchAsync(async (req, res) => {
  try {
    const data = await service.getOrders(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (e) {
    return returnFail(req, res, e);
  }
});

const changeStatus = catchAsync(async (req, res) => {
  try {
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, 'body'),
        CODE.INVALID
      );
    }
    const data = await service.changeStatus(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, COMMON_MESSAGES.UPDATE_ORDER_STATUS_SUCCESS);
  } catch (e) {
    return returnFail(req, res, e);
  }
});

const updateOrder = catchAsync(async (req, res) => {
  try {
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, 'body'),
        CODE.INVALID
      );
    }
    const data = await service.updateOrder(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, COMMON_MESSAGES.UPDATE_ORDER_SUCCESS);
  } catch (e) {
    return returnFail(req, res, e);
  }
});

module.exports = {
  getOrder,
  getOrders,
  changeStatus,
  updateOrder
};
