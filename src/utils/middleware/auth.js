const rateLimit = require('express-rate-limit');
const catchAsync = require('../errorHandle/catchAsync');
const JWTAction = require('./JWTAction');
const AppError = require('../errorHandle/appError');
const db = require("../../models");

exports.protectingRoutes = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization?.startsWith('Bearer')
  && req.headers.authorization.split(' ')[1];

  if (!token || token === 'null') {
    return next(new AppError('You are not logged in', 401));
  }
  const decodedToken = await JWTAction.verifyToken(token);

  const user = await db.User.findOne({
    attributes: { exclude: ['password', 'resetToken', 'status'] },
    where: { id: decodedToken.userId },
  });
  if (!user) {
    return next(new AppError('this user does not exist', 401));
  }
  req.user = user;
  next();
});

exports.loginLimiter = rateLimit({
  windowMs: 3 * 60 * 1000, // 3 minutes
  max: process.env.NODE_ENV === 'test' ? 100 : 5,
  message: 'Something went wrong , try again after 3 minutes',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
