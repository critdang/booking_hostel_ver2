const format = require('string-format');
const db = require('../models');
const { sequelize } = require('../config/connectDB');
const { ERROR } = require('../constants/commonMessage');
const { CODE } = require('../constants/code');
const AppError = require('../utils/errorHandle/appError');
const { COMMON_MESSAGES } = require('../constants/commonMessage');
const MessageHelper = require('../utils/message');

const addToCart = async (req) => {
  const userId = req.user.id;
  const { roomId, checkIn, checkOut } = req.body;
  const foundRoom = await db.Room.findOne({ where: { id: roomId } });
  if (!foundRoom) {
    throw new AppError(format(MessageHelper.getMessage('noFoundRoom'), roomId));
  }
  // if user login
  if (userId) {
    const foundCart = await db.Cart.findOne({ where: { userId } });

    if (!foundCart) {
      const result = await sequelize.transaction(async (t) => {
        const newCart = await db.Cart.create(
          { userId, checkIn, checkOut },
          { transaction: t }
        );
        await db.CartRoom.create(
          { roomId, cartId: newCart.id },
          { transaction: t }
        );
        return newCart;
      });
      return result;
    }
    await db.CartRoom.create({ roomId, cartId: foundCart.id });
    return foundCart;
  }
  // if user not login
  const existCart = localStorage.getItem('roomId', roomId);
  if (existCart) {
    const newRoomToCart = existCart.push(roomId);
    localStorage.setItem('roomId', newRoomToCart);
    return newRoomToCart;
  }
  const newRoomToCart = localStorage.setItem('roomId', roomId);
  return newRoomToCart;
};

const getItemInCart = async (req) => {
  const userId = req.user.id;
  try {
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
              include: [
                {
                  model: db.RoomImage,
                  attributes: [],
                  include: [
                    {
                      model: db.Image,
                      attributes: ['id', 'href', 'isDefault'],
                    },
                  ],
                },
              ],
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
        format(COMMON_MESSAGES.ERROR, ERROR.NO_ROOM_IN_CART),
        CODE.ERROR
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
        const images = [room.CartRooms.Room.RoomImages.Image.href];
        const roomInDetail = {
          roomId,
          name: room.CartRooms.Room.name,
          description: room.CartRooms.Room.description,
          price: room.CartRooms.Room.price,
          image: images,
        };
        detailRoom.push(roomInDetail);
      } else {
        detailRoom = detailRoom.map((roomInDetail) => {
          if (roomInDetail.roomId === roomId) {
            roomInDetail.image.push(room.CartRooms.Room.RoomImages.Image.href);
          }
          return roomInDetail;
        });
      }
    });
    totalCart.detailRoom = detailRoom;
    return totalCart;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const removeItemFromCart = async (req) => {
  const userId = req.user.id;
  const { roomId } = req.params;
  if (userId) {
    const foundCart = await db.Cart.findOne({ where: { userId } });
    if (!foundCart) {
      throw new AppError(format(MessageHelper.getMessage('noFoundCart'), userId));
    }
    const roomInCart = await db.CartRoom.destroy({ where: { cartId: foundCart.id, roomId } });
    if (!roomInCart) {
      throw new AppError(format(MessageHelper.getMessage('cannotRemoveItem')));
    }
  }
};
module.exports = {
  addToCart,
  getItemInCart,
  removeItemFromCart,
};
