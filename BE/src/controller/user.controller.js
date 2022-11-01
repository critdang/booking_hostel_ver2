const format = require("string-format");
const service = require("../service/userService");
const catchAsync = require("../utils/errorHandle/catchAsync");
const { returnSuccess, returnFail } = require('../utils/helperFn');
const { CODE } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES } = require("../constants/commonMessage");

const createUser = async (req, res) => {
  try {
    // req.body.image = req.file.originalname;
    if (!req.body) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, 'email or password'),
        CODE.INVALID
      );
    }
    const data = await service.createUser(req.body, req.file);
    if (!data.id) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (error) {
    return returnFail(req, res, error);
  }
};
module.exports = { createUser };
