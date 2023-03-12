const Joi = require('joi');
const AppError = require('../utils/errorHandle/appError');

const handleLoginValidateMethod = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .error(
      (errors) => {
        errors.forEach((err) => {
          console.log("🚀 ~ file: validate.js:15 ~ errors.forEach ~ err:", err);
        });
      }
    )
    .required(),
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
    const joiRes = await handleLoginValidateMethod.validateAsync(req.body);
    if (joiRes.error) {
      console.log("🚀 ~ file: validate.js:102 ~ exports.handleLoginValidate= ~ joiRes.error:", joiRes.error);
    }

    next();
  } catch (err) {
    console.log("🚀 ~ file: validate.js:103 ~ exports.handleLoginValidate= ~ err:", err);
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
