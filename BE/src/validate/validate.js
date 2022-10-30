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

exports.handleLoginValidate = async (req, res, next) => {
  try {
    await handleLoginValidateMethod.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};
