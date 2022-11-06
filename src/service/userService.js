const bcrypt = require('bcrypt');
const format = require("string-format");
const db = require('../models/index');
const { CODE, ERROR } = require("../constants/code");
const { generateJWT } = require('../utils/middleware/JWTAction');
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES, VERIFY_MESSAGES } = require("../constants/commonMessage");
const helperFn = require('../utils/helperFn');
require('dotenv').config();

const createUser = async (req, res) => {
  try {
    const avatar = await req.file.path;
    const data = req.body;
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
    const newUser = await db.User.create({
      userName: data.userName,
      email: data.email,
      password: hashPassword,
      address: data.address,
      phone: data.phone,
      avatar,
    });
    const token = generateJWT(newUser.email, '30m');
    helperFn.sendMail(data.email, VERIFY_MESSAGES.VERIFY_EMAIL, VERIFY_MESSAGES.SUCCESS_EMAIL_DESC, VERIFY_MESSAGES.SUCCESS_EMAIL_ENDPOINT, token);
    return newUser;
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
        userFetch.token = generateJWT(userFetch.id, '15m');
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

const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const result = await db.User.findFirst({ where: { email, isActive: false } });
    if (!result) return helperFn.returnFail(req, res, 'User not found or not active yet');
    const token = generateJWT(email, '30m');
    await db.User.update({
      where: {
        email,
        isActive: true,
      },
      resetToken: token,
    });
    await helperFn.forgotPassword(email, token);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createUser,
  login,
  forgotPassword
};
