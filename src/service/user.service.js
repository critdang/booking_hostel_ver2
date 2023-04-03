const bcrypt = require('bcrypt');
const format = require("string-format");

const db = require('../models/index');
const JWTAction = require('../utils/middleware/JWTAction');
const AppError = require("../utils/errorHandle/appError");
const { VERIFY_MESSAGES } = require("../constants/commonMessage");
const helperFn = require('../utils/helperFn');
const MessageHelper = require('../utils/message');
const ResponseHelper = require('../utils/response');
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
    fullName: data.fullName,
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

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new AppError(
      format(MessageHelper.getMessage('Please provide email and password!')),
    );
  }
  const foundUser = await db.User.findOne({
    attributes: { exclude: ['createdAt', 'updatedAt', 'resetToken', 'isBlocked'] },
    where: { email },
    raw: true,
  });
  if (!foundUser) {
    ResponseHelper.responseError(res, format(MessageHelper.getMessage('noFoundUser')));
    throw new AppError(
      format(MessageHelper.getMessage('noFoundUser')),
    );
  }
  const accessToken = JWTAction.generateJWT({ userId: foundUser.id }, '15m');
  const refreshToken = JWTAction.generateRefreshToken(foundUser.id);
  const data = {
    userInfo: {
      fullName: foundUser.fullName,
      email: foundUser.email,
      address: foundUser.address,
      phone: foundUser.phone,
      avatar: foundUser.avatar,
      gender: foundUser.gender,
    }
  };
  const isValid = bcrypt.compareSync(password, foundUser.password);

  if (!isValid) {
    throw new AppError(
      format(MessageHelper.getMessage('wrongPassword')),
    );
  }

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
    sameSite: 'strict',
    // secure: true, //cookie will only be sent over HTTPS
  }).cookie('accessToken', accessToken, {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 1000,
  });
  console.log('accessToken and refreshToken: ', accessToken, refreshToken);
  data.accessToken = accessToken;
  data.refreshToken = refreshToken;

  return data;
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

  const newUser = await db.User.update(data, {
    where: { id },
  });
  return newUser;
};

const updatePassword = async (req) => {
  const { id } = req.user;
  const { password } = req.body;
  if (!password) {
    throw new AppError(
      format(MessageHelper.getMessage('providedPassword')),
    );
  }
  const hashPassword = await helperFn.hashPassword(password);
  const newUser = await db.User.update({
    password: hashPassword,
  }, {
    where: { id },
  });
  return newUser;
};

const updateAvatar = async (req) => {
  const { id } = req.user;
  console.log("🚀 ~ file: user.service.js:141 ~ updateAvatar ~ req.user:", req.user);
  const avatar = await req.file.path;
  console.log("🚀 ~ file: user.service.js:142 ~ updateAvatar ~ avatar:", avatar);

  const newUser = await db.User.update({
    avatar,
  }, {
    where: { id },
  });
  return newUser;
};

const getUser = async (req) => {
  const { id } = req.params;
  const user = await db.User.findOne({
    attributes: ['id', 'fullName', 'email', 'address', 'phone', 'gender', 'avatar'],
    where: { id },
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

const deleteUser = async (req) => {
  const { id } = req.params;
  const user = await db.User.destroy({
    where: { id },
  });
  return user;
};

const ratingRoom = async (req) => {
  const { userId } = req.user;
  const { roomId, rating } = req.body;
  const foundUser = await db.User.findOne({
    where: { id: userId },
  });
  const foundRoom = await db.Room.findOne({
    where: { id: roomId },
  });
  if (!foundUser) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundUser')),
    );
  }
  if (!foundRoom) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundRoom')),
    );
  }
  // const newRating = await db.Rating.create({
  //   userId,
  //   roomId,
  //   rating,
  // });
  const newRating = "Room has been rated";
  return newRating;
};

module.exports = {
  createUser,
  login,
  forgotPassword,
  updateProfile,
  updatePassword,
  updateAvatar,
  getUser,
  getUsers,
  ratingRoom,
  deleteUser
};
