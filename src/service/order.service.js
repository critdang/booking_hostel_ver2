const format = require("string-format");
const db = require("../models");
const { CODE } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES } = require("../constants/commonMessage");

const getOrder = async (req) => {
  try {
    const { orderId } = req.params;
    if (!orderId) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, orderId),
        CODE.INVALID
      );
    }
    const foundOrder = await db.Order.findOne({
      where: {
        id: orderId,
      }
    });
    if (!foundOrder) {
      throw new AppError(
        format(COMMON_MESSAGES.NOT_FOUND, orderId),
        CODE.NOT_FOUND
      );
    }
    return foundOrder;
  } catch (error) {
    return error;
  }
};

const getOrders = async () => {
  try {
    const foundOrders = await db.Order.findAll();
    if (!foundOrders) {
      throw new AppError(
        format(COMMON_MESSAGES.NOT_FOUND, 'orders'),
        CODE.NOT_FOUND
      );
    }
    return foundOrders;
  } catch (error) {
    return error;
  }
};

const changeStatus = async (req) => {
  try {
    const { orderId } = req.params;
    const { newStatus } = req.body;
    if (!orderId || !newStatus) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, 'orderId or newStatus'),
        CODE.INVALID
      );
    }
    const updateStatus = await db.Order.update(
      { status: newStatus },
      {
        where: {
          id: orderId,
          status: 'pending',
        }
      }
    );
    if (!updateStatus) {
      throw new AppError(
        format(COMMON_MESSAGES.NOT_FOUND, orderId),
        CODE.NOT_FOUND
      );
    }
    return updateStatus;
  } catch (error) {
    return error;
  }
};

const updateOrder = async (req) => {
  try {
    const { orderId } = req.params;
    const { newStatus } = req.body;
    if (!orderId || !newStatus) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, 'orderId or newStatus'),
        CODE.INVALID
      );
    }
    const result = await db.Order.update(
      { status: newStatus },
      {
        where: {
          id: orderId,
          status: 'pending',
        }
      }
    );
    if (!result) {
      throw new AppError(
        format(COMMON_MESSAGES.NOT_FOUND, orderId),
        CODE.NOT_FOUND
      );
    }
    return result;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getOrder,
  getOrders,
  changeStatus,
  updateOrder
};
