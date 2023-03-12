/* eslint-disable no-param-reassign */
const rateLimit = require('express-rate-limit');
const format = require("string-format");
const catchAsync = require('../errorHandle/catchAsync');
const JWTAction = require('./JWTAction');
const AppError = require('../errorHandle/appError');
const db = require("../../models");
const logger = require('../logger/app-logger');

const ResponseHelper = require('../response');
const MessageHelper = require('../message');

// determine the user is login or not
exports.protectingRoutes = catchAsync(async (req, res, next) => {
  // const token = req.headers.authorization?.startsWith('Bearer')
  // && req.headers.authorization.split(' ')[1];
  const token = req.cookies?.accessToken;
  if (!token || token === 'null') {
    return next(new AppError('You are not logged in', 401));
  }
  const decodedToken = await JWTAction.verifyToken(token);

  if (!decodedToken.userId) {
    return next(new AppError('Your token is expired. Please login again', 401));
  }
  const user = await db.User.findOne({
    attributes: { exclude: ['password', 'resetToken', 'status'] },
    where: { id: decodedToken.userId },
  });

  if (!user) {
    return next(new AppError('this user does not exist', 401));
  }
  req.user = user;
  return next();
});

// determine the user role is guest or not
exports.checkUser = async (req, res, next) => {
  try {
  //   const token = req.headers.authorization?.startsWith('Bearer')
  // && req.headers.authorization.split(' ')[1];
    const token = req.cookies?.accessToken;
    if (!token) {
      // the user is guest (not login)
      return next();
    }
    const decodedToken = await JWTAction.verifyToken(token);
    if (token && !decodedToken.userId) {
      throw new AppError(
        format(MessageHelper.getMessage('expiredToken'))
      );
    }

    const user = await db.User.findOne({
      attributes: { exclude: ['password', 'resetToken', 'status'] },
      where: { id: decodedToken.userId },
    });
    if (!user) {
      return next(new AppError('this user does not exist', 401));
    }
    req.user = user;
    return next();
  } catch (error) {
    logger.error(`AdminAuthentication:login:: - ${error.message}`);
    return ResponseHelper.responseError(res, error.message);
  }
};

exports.protectingRoutes1 = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization?.startsWith('Bearer')
  && req.headers.authorization.split(' ')[1];

  if (!token || token === 'null') {
    return next();
  }
  const decodedToken = await JWTAction.verifyToken(token);

  if (!decodedToken.userId) {
    return next(new AppError('You token is expired. Please login again', 401));
  }
  const user = await db.User.findOne({
    attributes: { exclude: ['password', 'resetToken', 'status'] },
    where: { id: decodedToken.userId },
  });

  if (!user) {
    return next(new AppError('this user does not exist', 401));
  }
  req.user = user;
  return next();
});

exports.loginLimiter = rateLimit({
  windowMs: 3 * 60 * 1000, // 3 minutes
  max: process.env.NODE_ENV === 'test' ? 100 : 5,
  message: 'Something went wrong , try again after 3 minutes',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

exports.checkRole = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return next(
      new AppError('you dont have permission to do this action', 403)
    );
  }
  return next();
};
