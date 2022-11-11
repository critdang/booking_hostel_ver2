const format = require("string-format");
const _ = require('lodash');
const db = require("../models");
const AppError = require("../utils/errorHandle/appError");
const MessageHelper = require('../utils/message');

const getOrder = async (req) => {
  const { orderId } = req.params;
  const foundOrder = await db.Order.findOne({
    where: {
      id: orderId,
    }
  });
  if (!foundOrder) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundOrder'), orderId),
    );
  }
  return foundOrder;
};

const getOrders = async () => {
  const foundOrders = await db.Order.findAll();
  if (!foundOrders) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundOrders')),
    );
  }
  return foundOrders;
};

const changeStatus = async (req) => {
  const { orderId } = req.params;
  const { newStatus } = req.body;

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
      format(MessageHelper.getMessage('updateStatusOderFailed')),
    );
  }
  return updateStatus;
};

const updateOrder = async (req) => {
  const { orderId } = req.params;
  const { newStatus } = req.body;

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
      format(MessageHelper.getMessage('updateOrderFailed')),
    );
  }
  return result;
};

const createOrder = async (req) => {
  const userId = req.user.id;
  const { paymentMethod, arrival, departure } = req.body;
  const code = Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substring(1, 6);
  if (userId) {
    const foundCart = await db.Cart.findOne({
      where: { userId },
    });
    if (!foundCart) {
      throw new AppError(
        format(MessageHelper.getMessage('noFoundCart'), userId),
      );
    }
    const foundCartRooms = await db.CartRoom.findAll({
      where: { cartId: foundCart.id },
    });
    if (_.isEmpty(foundCartRooms)) {
      throw new AppError(
        format(MessageHelper.getMessage('noFoundCartRoom'), foundCart.id),
      );
    }
    let total = 0;
    for (const foundCartRoom of foundCartRooms) {
      const foundRoom = await db.Room.findOne({
        where: { id: foundCartRoom.roomId },
      });
      total += foundRoom.price;
    }
    const newOrder = await db.Order.create({
      code,
      date: new Date(),
      userId,
      paymentMethod,
      total,
      arrival,
      departure,
    });
    for (const foundCartRoom of foundCartRooms) {
      await db.RoomInOrder.create({
        roomId: foundCartRoom.roomId,
        orderId: newOrder.id,
      });
    }
  }
  // if user not login
};
module.exports = {
  getOrder,
  getOrders,
  changeStatus,
  updateOrder,
  createOrder
};
