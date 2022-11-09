const format = require("string-format");
const db = require('../models/index');
const JWTAction = require('../utils/middleware/JWTAction');
const AppError = require("../utils/errorHandle/appError");
const { ERROR } = require("../constants/commonMessage");
const helperFn = require('../utils/helperFn');
const MessageHelper = require('../utils/message');

require('dotenv').config();

const verifyUser = async (req,) => {
  const { token } = req.params;

  const decodedToken = JWTAction.verifyToken(token);
  const user = await db.User.findOne({
    where: { email: decodedToken.id }
  });
  if (!user) {
    throw new AppError(
      format(MessageHelper.getMessage('verifyUserFailed')),
    );
  }
  await db.User.update({
    status: 'active'
  }, { where: { email: user.email } });
};

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
    where: { email: decodedToken.input, resetToken: token },
  });
  const { email } = user;
  if (!user) {
    res.send('<h1>This email is expired. Please use the latest email</h1>');
  }
  res.render('auth/forgotPassword.ejs', { email, token });
};

const resetPassword = async (req) => {
  const { password, email } = req.body;
  const hashPass = await helperFn.hashPassword(password);
  const result = await db.User.update(
    {
      password: hashPass,
      resetToken: null,
    },
    { where: { email } }
  );
  return result;
};

module.exports = {
  verifyUser,
  changeBlockUserStt,
  verifyResetPassword,
  resetPassword
};
