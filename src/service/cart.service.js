const { verifyToken } = require('../utils/middleware/JWTAction');
const db = require('../models');
const catchAsync = require('../utils/errorHandle/catchAsync');
const { returnSuccess, returnFail } = require('../utils/helperFn');
const { sequelize } = require('../config/connectDB');
const { ERROR } = require('../constants/commonMessage');

const checkout = catchAsync(async (req, res) => {
  try {
    // create order
    const code = Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substring(1, 6);
    const date = new Date();
    const total = parseFloat(req.body.total);
    const userId = parseInt(req.body.userId, 10);
    const payment = 'cash';

    const order = await db.Order.create({
      code,
      date,
      total,
      userId,
      payment,
    });
    const orderId = order.dataValues.id;

    // update card quantity and also card-order table
    const { quantity } = req.body;
    const cartIds = Object.keys(quantity);
    for (const cartId of cartIds) {
      const id = parseInt(cartId.substring(2), 10);
      if (quantity[cartId] == 'false') {
        await db.Cart.destroy({
          where: { id },
        });
      } else {
        // update cart
        await sequelize.query(`UPDATE Cart SET quantity = quantity +${quantity[cartId]}, onCart = 0  WHERE id=${id}`, {
          model: db.Cart,
          type: sequelize.QueryTypes.INSERT,
        });

        // create cart-order
        await db.CartOrder.create({
          cartId: id,
          orderId,
        });
      }
    }
    const data = order.dataValues;
    returnSuccess(req, res, 0, data, 'Checkout successfully');
  } catch (e) {
    returnFail(req, res, 1, e.message);
  }
});

const cartPage = catchAsync(async (req, res) => {
  try {
    const { id: userId } = verifyToken(req.cookies.token);
    const carts = await db.Cart.findAll(
      {
        where: {
          userId,
          onCart: 1,
        },
      },
    );
    for (const cart of carts) {
      cart.Room = await db.Room.findOne(
        {
          where: {
            id: cart.roomId,
          },
        },
      );
    }
    res.render('cart', {
      carts, userId,
    });
  } catch (e) {
    console.log(e);
  }
});
const addToCart = catchAsync(async (req, res) => {
  const { productId } = req.body;
  const quantity = 1;
  try {
    const foundProduct = await db.Cart.findOne({ where: { id: productId } });
    if (!foundProduct) {
      return new Error(ERROR.NO_PRODUCT_FOUND);
    }
    if (quantity < 0) {
      return new Error(ERROR.WRONG_INPUT_QUANTITY);
    }
    if (quantity > foundProduct.reserve) {
      return new Error(ERROR.PRODUCT_EXCEED);
    }
    // if user login
    // if() {
    const existCart = await db.Cart.findOne({ where: {} });
    // }

    returnSuccess(req, res, 'Add to cart successfully');
  } catch (e) {
    returnFail(req, res, 1, e.message);
  }
});

const getCart = catchAsync(async (req, res) => {
  const userId = req.user.id;
  try {
    const foundCart = await db.Cart.findOne({
      where: { userId },
      include: {
        model: db.Room,
      }
    });
  } catch (e) {
    return e;
  }
});
module.exports = { cartPage, checkout, addToCart };
