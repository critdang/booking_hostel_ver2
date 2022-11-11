const format = require("string-format");
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
    const cartItems = await db.Cart.findAll({
      attributes: ['id', 'userId'],
      include: [
        {
          model: db.CartRoom,
          attributes: [],
          include: [
            {
              model: db.Room,
              attributes: ['name', 'detail', 'description', 'price'],
            },
          ],
        },
      ],
      where: { userId },
      raw: true,
      nest: true,
    });
    if (!cartItems) {
      throw new AppError(
        format(MessageHelper.getMessage('noFoundCart'), userId),
      );
    }
    const totalCart = { totalPrice: 0 };
    let detailRoom = [];
    const roomIds = new Set();
    cartItems.map((room) => {
      totalCart.totalPrice += parseInt(room.CartRooms.Room.price, 10);
      const roomId = room.CartRooms.Room.id;
      if (!roomIds.has(roomId)) {
        roomIds.add(roomId);
        const roomInDetail = {
          roomId,
          name: room.CartRooms.Room.name,
          description: room.CartRooms.Room.description,
          price: room.CartRooms.Room.price,
          quantity: 1,
        };
        detailRoom.push(roomInDetail);
      } else {
        detailRoom = detailRoom.map((roomInDetail) => {
          if (roomInDetail.roomId === roomId) {
            roomInDetail.quantity += 1;
          }
          return roomInDetail;
        });
      }
    });
    totalCart.detailRoom = detailRoom;
    await db.Order.create({
      code,
      date: new Date(),
      userId,
      paymentMethod,
      total: totalCart.totalPrice,
      arrival,
      departure,
    });
  }
};

module.exports = {
  getOrder,
  getOrders,
  changeStatus,
  updateOrder,
  createOrder
};
