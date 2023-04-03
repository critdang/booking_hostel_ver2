const userRouter = require('./user.route');
const roomRouter = require('./room.route');
const authRouter = require('./auth.route');
const invoiceRouter = require('./invoice.route');
const categoryRouter = require('./category.route');
const guestRouter = require('./guest.route');
const teamRouter = require('./team.route');
const branchRouter = require('./branch.route');
const serviceRouter = require('./service.route');
const dashboardRouter = require('./dashboard.route');

const initRoutes = (app) => {
  app.use('/', authRouter);
  app.use('/user', userRouter);
  app.use('/room', roomRouter);
  app.use('/category', categoryRouter);
  app.use('/invoice', invoiceRouter);
  app.use('/guest', guestRouter);
  app.use('/team', teamRouter);
  app.use('/branch', branchRouter);
  app.use('/service', serviceRouter);
  app.use('/dashboard', dashboardRouter);
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
