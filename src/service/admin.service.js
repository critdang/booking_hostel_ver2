const format = require("string-format");
const db = require('../models/index');
const JWTAction = require('../utils/middleware/JWTAction');
const AppError = require("../utils/errorHandle/appError");
const { ERROR } = require("../constants/commonMessage");
const helperFn = require('../utils/helperFn');
const MessageHelper = require('../utils/message');
const client = require("../config/connectRedis");

require('dotenv').config();

const changeBlockUserStt = async (req, res) => {
  const idUser = +req.params.id;
  const existStatus = await db.User.findOne({
    where: { id: idUser },
  });
  if (!existStatus) return helperFn.returnFail(req, res, ERROR.NO_FOUND_USER);

  const updateBlockUser = await db.User.update({
    isBlocked: !existStatus.isBlocked
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

const logOut = async (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) {
    throw new AppError(
      format(MessageHelper.getMessage('refreshTokenNotFound')),
    );
  }
  const { userId } = JWTAction.verifyRefreshToken(refreshToken);
  client.del(userId.toString());
  res.clearCookie('refreshToken');
  res.clearCookie('accessToken');
};

module.exports = {
  changeBlockUserStt,
  verifyResetPassword,
  resetPassword,
  logOut
};
