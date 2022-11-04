const bcrypt = require('bcrypt');
const format = require("string-format");
const db = require('../models/index');
const { generateJWT } = require('../middleware/JWTAction');
const { CODE, ERROR } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES } = require("../constants/commonMessage");
// const { imageProcess } = require('../utils/cloudinary/cloudinary');
require('dotenv').config();

const login = async (email, password) => {
  try {
    const userFetch = await db.User.findOne({
      attributes: ['id', 'email', 'password'],
      where: { email },
      raw: true,
    });
    if (userFetch) {
      // compare password
      const check = bcrypt.compareSync(password, userFetch.password);
      if (check) {
        userFetch.token = generateJWT(userFetch.id);
      } else {
        throw new AppError(
          format(COMMON_MESSAGES.INCORRECT, `password for user ${email}`),
          ERROR.PASSWORDISNOTCORRECT
        );
      }
    } else {
      throw new AppError(
        format(COMMON_MESSAGES.NOT_FOUND, email),
        CODE.NOT_FOUND
      );
    }
    return userFetch;
  } catch (e) {
    return e;
  }
};

module.exports = { login };
