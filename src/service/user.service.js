const bcrypt = require('bcrypt');
const format = require("string-format");
const db = require('../models/index');
const { CODE, ERROR } = require("../constants/code");
const JWTAction = require('../utils/middleware/JWTAction');
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
    const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);
    const hashPassword = await bcrypt.hash(data.password, saltRounds);
    const newUser = await db.User.create({
      userName: data.userName,
      email: data.email,
      password: hashPassword,
      address: data.address,
      phone: data.phone,
      avatar,
    });
    const token = JWTAction.generateJWT(newUser.email, '30m');
    helperFn.sendMail(data.email, VERIFY_MESSAGES.VERIFY_EMAIL, VERIFY_MESSAGES.SUCCESS_EMAIL_DESC, VERIFY_MESSAGES.SUCCESS_EMAIL_ENDPOINT, token);
    return newUser;
  } catch (e) {
    return e;
  }
};

const login = async (req) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, `email or password is n't correct`),
        CODE.INVALID
      );
    }
    const foundUser = await db.User.findOne({
      attributes: ['id', 'email', 'password'],
      where: { email },
      raw: true,
    });
    const result = {
      userId: foundUser.id,
    };
    if (foundUser) {
      // compare password
      const check = bcrypt.compareSync(password, foundUser.password);
      if (check) {
        result.accessToken = JWTAction.generateJWT({ userId: foundUser.id }, '15m');
      } else {
        throw new AppError(
          format(COMMON_MESSAGES.INCORRECT, `password for user ${email}`),
          ERROR.PASSWORDISNOTCORRECT
        );
      }
      return result;
    }
    throw new AppError(
      format(COMMON_MESSAGES.NOT_FOUND, email),
      CODE.NOT_FOUND
    );
  } catch (e) {
    return e;
  }
};

const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const foundUser = await db.User.findOne({ where: { email, status: 'pending' } });
    if (foundUser) {
      return helperFn.returnFail(req, res, 'User not found or not active yet');
    }
    const token = JWTAction.generateJWT(email, '30m');
    const result = await db.User.update(
      { resetToken: token },
      {
        where: {
          email,
          status: 'active',
        }
      },
    );
    await helperFn.forgotPassword(email, token);
    return result;
  } catch (err) {
    console.log(err);
  }
};

const updateProfile = async (req, res) => {
  try {
    const { id } = req.user;
    const data = req.body;
    // const hashPassword = await bcrypt.hash(data.password, saltRounds);
    const hashPassword = await helperFn.hashPassword(data.password);
    const newUser = await db.User.update({
      fullName: data.fullName,
      email: data.email,
      password: hashPassword,
      address: data.address,
      phone: data.phone,
    }, {
      where: { id },
    });
    return newUser;
  } catch (e) {
    return e;
  }
};

const updateAvatar = async (req, res) => {
  try {
    const { id } = req.user;
    const avatar = await req.file.path;
    const newUser = await db.User.update({
      avatar,
    }, {
      where: { id },
    });
    return newUser;
  } catch (e) {
    return e;
  }
};

const getUser = async (req) => {
  try {
    const { userId } = req.params;
    const user = await db.User.findOne({
      attributes: ['id', 'fullName', 'email', 'address', 'phone', 'avatar'],
      where: { id: userId },
      raw: true,
    });
    return user;
  } catch (e) {
    return e;
  }
};

const getUsers = async () => {
  try {
    const users = await db.User.findAll({
      attributes: { exclude: ['password', 'resetToken'] },
    });
    return users;
  } catch (e) {
    return e;
  }
};

module.exports = {
  createUser,
  login,
  forgotPassword,
  updateProfile,
  updateAvatar,
  getUser,
  getUsers
};
