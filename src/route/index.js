const userRouter = require('./user.route');
const roomRouter = require('./room.route');
const cartRouter = require('./cart.route');
const authRouter = require('./auth.router');
const orderRouter = require('./order.route');
const categoryRouter = require('./category.route');

const initRoutes = (app) => {
  app.use('/', authRouter);
  app.use('/user', userRouter);
  app.use('/room', roomRouter);
  app.use('/category', categoryRouter);
  app.use('/cart', cartRouter);
  app.use('/order', orderRouter);
  app.use('/', (req, res) => res.status(200).json('Welcome to my API server for CASA. This API is authorized by Crit Dang and is not for public use.'));
  // Handle not found URL errors
  app.use("*", (req, res) => {
    const err = Error(`Requested path ${req.path} not found`);
    res.status(404).send({
      success: false,
      message: `Requested path ${req.path} not found`,
      stack: err.stack,
    });
  });
};

module.exports = initRoutes;
