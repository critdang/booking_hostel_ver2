const bcrypt = require('bcrypt');
const format = require("string-format");

const db = require('../models/index');
const JWTAction = require('../utils/middleware/JWTAction');
const AppError = require("../utils/errorHandle/appError");
const { VERIFY_MESSAGES } = require("../constants/commonMessage");
const helperFn = require('../utils/helperFn');
const MessageHelper = require('../utils/message');
require('dotenv').config();

const createUser = async (req) => {
  const data = req.body;
  const foundUser = await db.User.findOne({
    attributes: ['id', 'email'],
    where: { email: data.email, status: 'active' },
    raw: true,
  });
  if (foundUser) {
    throw new AppError(
      format(MessageHelper.getMessage('existUser'), foundUser.email),
    );
  }
  const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);
  const hashPassword = await bcrypt.hash(data.password, saltRounds);
  const newUser = await db.User.create({
    fullName: data.fullname,
    email: data.email,
    password: hashPassword,
    address: data.address,
    phone: data.phone,
  });
  const { email } = newUser;
  const token = JWTAction.generateJWT({ email }, '50m');
  helperFn.sendMail(data.email, VERIFY_MESSAGES.VERIFY_EMAIL, VERIFY_MESSAGES.SUCCESS_EMAIL_DESC, VERIFY_MESSAGES.SUCCESS_EMAIL_ENDPOINT, token);
  return newUser;
};

const login = async (req) => {
  const { email, password } = req.body;
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
      result.accessToken = JWTAction.generateJWT({ userId: foundUser.id }, '1h');
    } else {
      throw new AppError(
        format(MessageHelper.getMessage('loginFailed')),
      );
    }
  }
  return result;
};

const forgotPassword = async (req) => {
  const { email } = req.body;
  const foundUser = await db.User.findOne({ where: { email, status: 'pending' } });
  if (foundUser) {
    throw new AppError(
      format(MessageHelper.getMessage('userNotActiveOrFound'), foundUser.email),
    );
  }
  const token = JWTAction.generateJWT({ email }, '30m');
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
};

const updateProfile = async (req) => {
  const { id } = req.user;
  const data = req.body;
  const hashPassword = await helperFn.hashPassword(data.password);
  const newUser = await db.User.update({
    fullName: data.fullName,
    email: data.email,
    password: hashPassword,
    address: data.address,
    phone: data.phone,
    gender: data.gender,
  }, {
    where: { id },
  });
  return newUser;
};

const updateAvatar = async (req) => {
  const { id } = req.user;
  const avatar = await req.file.path;
  const newUser = await db.User.update({
    avatar,
  }, {
    where: { id },
  });
  return newUser;
};

const getUser = async (req) => {
  const { userId } = req.params;
  const user = await db.User.findOne({
    attributes: ['id', 'fullName', 'email', 'address', 'phone', 'avatar'],
    where: { id: userId },
    raw: true,
  });
  return user;
};

const getUsers = async () => {
  const users = await db.User.findAll({
    attributes: { exclude: ['password', 'resetToken'] },
  });
  return users;
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
