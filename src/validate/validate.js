const Joi = require('joi');
const AppError = require('../utils/errorHandle/appError');

const handleLoginValidateMethod = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required()
    .error(
      new AppError('Wrong format email', 400),
    ),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{1,30}$/)
    .required()
    .error(
      new AppError('Wrong format password', 400),
    ),
});

const handleRoomValidateMethod = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string(),
  images: Joi.array(),
  categoryId: Joi.number().required(),
  hot: Joi.number(),
  kid: Joi.number(),
  adult: Joi.number(),
  reserve: Joi.number(),
  active: Joi.number(),
  detail: Joi.string(),
});

const handleCategoryValidateMethod = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  thumbnail: Joi.string(),
});

const handleRegisterValidateMethod = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  address: Joi.string(),
  phone: Joi.string(),
  status: Joi.string(),
  gender: Joi.string(),
  isBlocked: Joi.boolean(),
  resetToken: Joi.string(),
  role: Joi.string(),
});

const handleLogin = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const handleForgotPassword = Joi.object({
  email: Joi.string().required(),
});

const handleProfileValidateMethod = Joi.object({
  fullName: Joi.string(),
  email: Joi.string(),
  address: Joi.string(),
  phone: Joi.string(),
  gender: Joi.string(),
});

const handleGuestValidateMethod = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }).error(
    new AppError('Wrong format email', 400),
  ).required(),
  address: Joi.string(),
  phone: Joi.number(),
  gender: Joi.string(),
});

exports.handleRoomValidate = async (req, res, next) => {
  try {
    await handleRoomValidateMethod.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

exports.handleLoginValidate = async (req, res, next) => {
  try {
    await handleLoginValidateMethod.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

exports.handleCategoryValidate = async (req, res, next) => {
  try {
    await handleCategoryValidateMethod.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

exports.handleRegisterValidate = async (req, res, next) => {
  try {
    await handleRegisterValidateMethod.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

exports.handleLoginValidate = async (req, res, next) => {
  try {
    await handleLogin.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

exports.handleForgotPasswordValidate = async (req, res, next) => {
  try {
    await handleForgotPassword.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

exports.handleProfileValidateMethodValidate = async (req, res, next) => {
  try {
    console.log("🚀 ~ file: validate.js ~ line 126 ~ exports.handleProfileValidateMethodValidate= ~ req.body", req.body);
    await handleProfileValidateMethod.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

exports.handleGuestValidate = async (req, res, next) => {
  try {
    await handleGuestValidateMethod.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};
