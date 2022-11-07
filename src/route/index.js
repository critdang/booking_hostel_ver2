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
};

module.exports = initRoutes;
