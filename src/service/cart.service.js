const format = require("string-format");
const { verifyToken } = require('../utils/middleware/JWTAction');
const db = require('../models');
const catchAsync = require('../utils/errorHandle/catchAsync');
const { returnSuccess, returnFail } = require('../utils/helperFn');
const { sequelize } = require('../config/connectDB');
const { ERROR } = require('../constants/commonMessage');
const { CODE } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES } = require("../constants/commonMessage");
const MessageHelper = require('../utils/message');

const addToCart = async (req, res) => {
  const userId = req.user.id;
  const { roomId } = req.body;
  const foundRoom = await db.Room.findOne({ where: { id: roomId } });
  if (!foundRoom) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundRoom'), roomId),
    );
  }
  if (quantity < 0) {
    throw new AppError(
      format(MessageHelper.getMessage('invalidQuantity')),
    );
  }
  // if user login
  if(userId) {

    const foundCart = await db.Cart.findOne({ where: { userId } });
    if (!foundCart) {
      const newCart = await db.Cart.create({ userId });
    }
    let roomInCart = await db.CartRoom.findOne({ where: { roomId, cartId: foundCart.id } });
    if(roomInCart) {
      roomInCart
    } else{
      const cartId = newCart.id;
      await db.CartRoom.create({ cartId, roomId });
      return returnSuccess(res, CODE.SUCCESS, newCart);

      }
    }
  }

  // if() {
  const existCart = await db.Cart.findOne({ where: {} });
  // }

  returnSuccess(req, res, 'Add to cart success  fully');
};

const getItemInCart = async (req) => {
  const userId = req.user.id;
  try {
    const cartItems = await db.Cart.findAll({
      attributes: ['id', 'userId'],
      include: [{
        model: db.CartRoom,
        attributes: [],
        include: [{
          model: db.Room,
          attributes: ['name', 'detail', 'description', 'price'],
          include: [{
            model: db.RoomImage,
            attributes: [],
            include: [{
              model: db.Image,
              attributes: ['id', 'href', 'isDefault'],
            }]
          }]
        }]
      }],
      where: { userId },
      raw: true,
      nest: true
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
          image: images
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
  const { roomId, cartId } = req.params;
  try {
    const foundCart = await db.Cart.findOne({ where: { userId, id: cartId } });
    if (!foundCart) {
      throw new AppError(
        format(COMMON_MESSAGES.NOT_FOUND, ERROR.NO_FOUND_CART),
        CODE.NOT_FOUND
      );
    }
    const roomInCart = await db.CartRoom.findOne({ where: { cartId, roomId } });
    if (!roomInCart) {
      throw new AppError(
        format(COMMON_MESSAGES.NOT_FOUND, ERROR.NO_ROOM_IN_CART),
        CODE.NOT_FOUND
      );
    }
    await roomInCart.destroy();
  } catch (e) {
    return e;
  }
};
module.exports = {
  addToCart, getItemInCart, removeItemFromCart
};
