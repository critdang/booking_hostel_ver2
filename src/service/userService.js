const bcrypt = require('bcrypt');
const format = require("string-format");
const db = require('../models/index');
const { CODE, ERROR } = require("../constants/code");
const { generateJWT } = require('../utils/middleware/JWTAction');
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES } = require("../constants/commonMessage");
// const { imageProcess } = require('../utils/cloudinary/cloudinary');
require('dotenv').config();

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const { file } = req.file;
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

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, 'email or password'),
        CODE.INVALID
      );
    }
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
module.exports = {
  createUser,
  login
};
