const format = require("string-format");
const db = require('../models/index');
const JWTAction = require('../utils/middleware/JWTAction');
const AppError = require("../utils/errorHandle/appError");
const { ERROR } = require("../constants/commonMessage");
const helperFn = require('../utils/helperFn');
const MessageHelper = require('../utils/message');
const client = require("../config/connectRedis");

require('dotenv').config();

const changeBlockUserStt = async (req) => {
  const idUser = req.params.id;
  const foundUser = await db.User.findOne({
    where: { id: idUser },
  });
  console.log("🚀 ~ file: admin.service.js:17 ~ changeBlockUserStt ~ foundUser:", foundUser);
  if (!foundUser) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundUser')),
    );
  }
  const updateBlockUser = await db.User.update({
    isBlocked: !foundUser.isBlocked
  }, { where: { id: idUser } });
  return updateBlockUser;
};

const verifyResetPassword = async (req, res) => {
  const { token } = req.params;
  const decodedToken = JWTAction.verifyToken(token);
  const user = await db.User.findOne({
    where: { email: decodedToken.email, resetToken: token },
  });
  if (!user) {
    throw new AppError(
      format(MessageHelper.getMessage('forgotPasswordFailed')),
    );
  }
  res.redirect(`${process.env.PORT_FE}/forgotPassword/verify/${token}`);
};

const resetPassword = async (req) => {
  const { tokenId } = req.params;
  const decodedToken = JWTAction.verifyToken(tokenId);
  const { password } = req.body;

  const hashPass = await helperFn.hashPassword(password);
  const result = await db.User.update(
    {
      password: hashPass,
      resetToken: null,
    },
    { where: { email: decodedToken.email } }
  );
  return result;
};
const handleRefeshToken = async (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) {
    throw new AppError(
      format(MessageHelper.getMessage('refreshTokenNotFound')),
    );
  }
  const { userId } = await JWTAction.verifyRefreshToken(refreshToken);
  const newAccessToken = await JWTAction.generateJWT({ userId }, '30m');
  const newRefreshToken = await JWTAction.generateRefreshToken(userId);
  res.cookie('refreshToken', newRefreshToken, {
    httpOnly: true,
    maxAge: 365 * 24 * 60 * 60 * 100,
    sameSite: 'strict',
    // maxAge: 365 * 24 * 60 * 60 * 100,
    // secure: true, //ssl nếu có, nếu chạy localhost thì comment nó lại
  }).cookie('accessToken', newAccessToken, {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 365 * 24 * 60 * 60 * 100,
  });
  return {
    accessToken: newAccessToken,
    refreshToken: newRefreshToken,
  };
};

const rating = async (req) => {
  const userId = req.user.id;
  const inputData = { ...req.body, userId };
  const newRating = await db.Rating.create(inputData);
  if (!newRating) {
    throw new AppError(
      format(MessageHelper.getMessage('noRatingCreated')),
    );
  }
  return newRating;
};

const logOut = async (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) {
    throw new AppError(
      format(MessageHelper.getMessage('refreshTokenNotFound')),
    );
  }
  const { userId } = JWTAction.verifyRefreshToken(refreshToken);
  // client.del(userId.toString());
  res.clearCookie('refreshToken');
  res.clearCookie('accessToken');
};

module.exports = {
  changeBlockUserStt,
  verifyResetPassword,
  resetPassword,
  handleRefeshToken,
  rating,
  logOut
};
