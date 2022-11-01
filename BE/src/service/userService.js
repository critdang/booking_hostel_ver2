const bcrypt = require('bcrypt');
const format = require("string-format");
const db = require('../models/index');
const { CODE, ERROR } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES } = require("../constants/commonMessage");
// const { imageProcess } = require('../utils/cloudinary/cloudinary');
require('dotenv').config();

const createUser = async (data, image) => {
  try {
    const userFetch = await db.User.findOne({
      attributes: ['id', 'email'],
      where: { email: data.email },
      raw: true,
    });
    if (userFetch) {
      throw new AppError(
        format(COMMON_MESSAGES.EXISTED, userFetch.email),
        ERROR.EMAILISEXIST
      );
    }
    const saltRounds = parseInt(process.env.saltrounds, 10);
    const hashPassword = await bcrypt.hash(data.password, saltRounds);
    const user = await db.User.create({
      userName: data.userName,
      email: data.email,
      password: hashPassword,
      address: data.address,
      phone: data.phone,
      image: data.image,
    });
    // const userId = user.dataValues.id;
    // imageProcess.upload(image, userId);
    return user.dataValues;
  } catch (e) {
    return e;
  }
};
module.exports = {
  createUser,
};
