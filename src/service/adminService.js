const bcrypt = require('bcrypt');
const format = require("string-format");
const db = require('../models/index');
const { CODE, ERROR } = require("../constants/code");
const JWTAction = require('../utils/middleware/JWTAction');
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES, VERIFY_MESSAGES } = require("../constants/commonMessage");
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

module.exports = {
  verifyUser
};
