const { verifyToken } = require('../middleware/JWTAction');
const db = require('../models');
// const cartOrder = require('../../models/cart-order');
// const catchAsync = require('../../utils/errorHandle/catchAsync');
// const helperfn = require('../../utils/helperFn');
// const { Cart } = require('../../models');
// const { sequelize } = require('../../config/connectDB');

const orderController = {
  orderPage:
    async (req, res) => {
      try {
        const { id: userId } = verifyToken(req.cookies.token);
        const orders = await db.Order.findAll(
          {
            where: {
              userId,
            },
          },
        );
        res.render('order', {
          orders,
        });
      } catch (e) {
        console.log(e);
      }
    },
  orderDetail:
    async (req, res) => {
      try {
        const { orderId } = req.params;
        // let cartOrder = await db.Order.findAll(
        //   {
        //     where: { id: orderId },
        //     include: [{
        //       model: db.Cart,
        //       through: {
        //         attributes: {
        //           exclude: ['CartOrder']
        //         }
        //       }
        //     }],
        //     raw: true,
        //     nest: true
        //   })

        const orderDetail = await db.Cart.findAll({
          include: [{
            model: db.Order,
            where: {
              id: orderId,
            },
          }, {
            model: db.Room,
          }],
          raw: true,
          nest: true,
        });

        // console.log(orderDetail);
        res.render('orderDetail', {
          data: orderDetail,
        });
      } catch (e) {
        console.log(e);
      }
    },
};
module.exports = orderController;
