const format = require("string-format");
const db = require('../models/index');
const { CODE } = require("../constants/code");
const JWTAction = require('../utils/middleware/JWTAction');
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES, VERIFY_MESSAGES, ERROR } = require("../constants/commonMessage");
const helperFn = require('../utils/helperFn');
require('dotenv').config();

const verifyUser = async (req, res) => {
  try {
    const { token } = req.params;
    if (!token) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, token),
        CODE.INVALID
      );
    }
    const decodedToken = JWTAction.verifyToken(token);
    const user = await db.User.findOne({
      where: { email: decodedToken.input }
    });
    if (!user) {
      throw new AppError(
        format(COMMON_MESSAGES.NOT_FOUND, decodedToken),
        CODE.NOT_FOUND
      );
    }
    await db.User.update({
      status: 'success'
    }, { where: { email: user.email } });
    return user.email;
  } catch (e) {
    return e;
  }
};

const changeBlockUserStt = async (req, res) => {
  const idUser = +req.params.id;
  try {
    const existStatus = await db.User.findOne({
      where: { id: idUser },
    });
    if (!existStatus) return helperFn.returnFail(req, res, ERROR.NO_FOUND_USER);

    const updateBlockUser = await db.User.update({
      isBlocked: !existStatus.isBlocked
    }, { where: { id: idUser } });
    return updateBlockUser;
  } catch (err) {
    console.log(err);
  }
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
  // helperFn.returnSuccess(req, res, { email, token });
  res.render('auth/forgotPassword.ejs', { email, token });
};

const resetPassword = async (req) => {
  const { password, email } = req.body;
  const hashPass = await helperFn.hashPassword(password);
  try {
    const result = await db.User.update(
      {
        password: hashPass,
        resetToken: null,
      },
      { where: { email } }
    );
    return result;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  verifyUser,
  changeBlockUserStt,
  verifyResetPassword,
  resetPassword
};
