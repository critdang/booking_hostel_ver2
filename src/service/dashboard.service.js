const bcrypt = require('bcrypt');
const format = require("string-format");
const db = require('../models/index');
const JWTAction = require('../utils/middleware/JWTAction');
const AppError = require("../utils/errorHandle/appError");
const MessageHelper = require('../utils/message');
const ResponseHelper = require('../utils/response');
require('dotenv').config();

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
      userId: foundUser.id,
      fullName: foundUser.fullName,
      email: foundUser.email,
      address: foundUser.address,
      phone: foundUser.phone,
      avatar: foundUser.avatar,
      gender: foundUser.gender,
      role: foundUser.role,
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

module.exports = {
  login,
};
