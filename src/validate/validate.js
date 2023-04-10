const Joi = require('joi');
const AppError = require('../utils/errorHandle/appError');

const handleLoginValidateMethod = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    }).required(),
  password: Joi.string().trim().required()
});

const handleRoomValidateMethod = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  categoryId: Joi.number().required(),
  description: Joi.string(),
  images: Joi.array(),
  hot: Joi.number(),
  kid: Joi.number(),
  adult: Joi.number(),
  reserve: Joi.number(),
  active: Joi.number(),
  detail: Joi.string(),
});

const handleReviewRoomValidateMethod = Joi.object({
  branchId: Joi.number().required(),
  roomId: Joi.number().required(),
  userId: Joi.number().required(),
  fullName: Joi.string().required(),
  content: Joi.string().required(),
  reviewDate: Joi.date(),
  images: Joi.array(),
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

const handleForgotPasswordMethod = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
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

const handleBranchValidateMethod = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }).error(
    new AppError('Wrong format email', 400),
  ).required(),
});

exports.handleRoomValidate = async (req, res, next) => {
  try {
    await handleRoomValidateMethod.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

exports.handleReviewRoomValidate = async (req, res, next) => {
  try {
    await handleReviewRoomValidateMethod.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

exports.handleLoginValidate = async (req, res, next) => {
  try {
    const { error } = await handleLoginValidateMethod.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    next();
  } catch (error) {
    console.log("🚀 ~ file: validate.js:125 ~ exports.handleLoginValidate= ~ error:", error);
    next(error);
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

exports.handleUpdatePassword = async (req, res, next) => {
  try {
    await handleForgotPasswordMethod.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

exports.handleProfileValidateMethodValidate = async (req, res, next) => {
  try {
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

exports.handleBranchValidate = async (req, res, next) => {
  try {
    await handleBranchValidateMethod.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};
