/* eslint-disable no-loop-func */
const format = require("string-format");
const moment = require('moment');
const _ = require('lodash');
const db = require("../models");
const AppError = require("../utils/errorHandle/appError");
const MessageHelper = require('../utils/message');
const { sequelize } = require("../config/connectDB");

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
  const id = req.params.orderId;
  const { newStatus } = req.body;

  const result = await db.Order.update(
    { status: newStatus },
    {
      where: {
        id,
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
  // create order from cart
  const userId = req.user.id;
  const { paymentMethod } = req.body;
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
    const cartId = foundCart.id;
    const foundCartRooms = await db.CartRoom.findAll({
      where: { cartId },
      attributes: ['checkIn', 'checkOut'],
      include: [{
        model: db.Room,
        attributes: ['id', 'name', 'price'],
      }],
      raw: true,
      nest: true,
    });
    if (!foundCartRooms) {
      throw new AppError(
        format(MessageHelper.getMessage('noFoundCart'), userId),
      );
    }
    // check valid booking date
    const roomDates = {};
    let total = 0;
    for (const cartRoom of foundCartRooms) {
      const { checkIn, checkOut } = cartRoom;
      const { id, name, price } = cartRoom.Room;
      total += price;
      // array contain all dates of each room
      if (!roomDates[name]) {
        const roomDate = await db.RoomDate.findAll({
          where: { roomId: id },
          attributes: ['from', 'to'],
        });
        if (_.isEmpty(roomDate)) {
          throw new AppError(
            format(MessageHelper.getMessage('noFoundRoomDate'), id),
          );
        }
        roomDates[name] = roomDate;
      }
      // compare booking date with room date
      for (const date in roomDates[name]) {
        if ((checkIn > date.from && checkIn < date.to) || (checkOut > date.from && checkOut < date.to)) {
          throw new AppError(
            format(MessageHelper.getMessage('roomUnavailable'), name),
          );
        }
      }
    }
    // the room is still available to book
    await sequelize.transaction(async (t) => {
      // create order
      const newOrder = await db.Order.create({
        code,
        date: new Date(),
        userId,
        paymentMethod,
        total,
      }, { transaction: t });
      // delete cart
      await db.Cart.destroy({
        where: { userId },
      }, { transaction: t });
      // delete cart room
      await db.CartRoom.destroy({
        where: { cartId },
      }, { transaction: t });
      for (const foundCartRoom of foundCartRooms) {
        // create room date
        await db.RoomDate.create({
          roomId: foundCartRoom.Room.id,
          from: foundCartRoom.checkIn,
          to: foundCartRoom.checkOut,
        }, { transaction: t });
        // create room in order
        await db.RoomInOrder.create({
          roomId: foundCartRoom.Room.id,
          from: foundCartRoom.checkIn,
          to: foundCartRoom.checkOut,
          orderId: newOrder.id,
        }, { transaction: t });
      }
    });
  }
  // if user not login
};
const viewOrder = async (req, res) => {
  const foundOrder = await db.Order.findOne({ where: { userId: req.user.id }, attributes: ['id', 'code', 'date', 'total', 'paymentMethod', 'userId'] });
  foundOrder.date = moment(foundOrder.date).format('DD/MM/YYYY, h:mm:ss a');
  foundOrder.userInfo = await db.User.findOne({ where: { id: foundOrder.userId }, attributes: ['id', 'fullname', 'email', 'phone', 'address'] });
  const foundRoomInOrder = await db.RoomInOrder.findAll({ where: { orderId: foundOrder.id }, attributes: ['roomId', 'from', 'to'] });
  const rooms = [];
  for (const roomInOrder of foundRoomInOrder) {
    const foundRoom = await db.Room.findOne({
      where: { id: roomInOrder.roomId },
      attributes: ['name', 'price'],
      include: [{
        model: db.Category,
        attributes: ['name']
      }],
      raw: true,
      nest: true
    });
    foundRoom.from = moment((roomInOrder.from)).format('DD/MM/YYYY, HH:mm');
    foundRoom.to = moment((roomInOrder.to)).format('DD/MM/YYYY, HH:mm');
    foundRoom.category = foundRoom.Category.name;
    rooms.push(foundRoom);
  }
  foundOrder.rooms = rooms;
  res.render('createOrderNoti/order', { order: foundOrder });
};
module.exports = {
  getOrder,
  getOrders,
  changeStatus,
  updateOrder,
  createOrder,
  viewOrder
};
