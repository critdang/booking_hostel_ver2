const format = require("string-format");
const service = require("../service/controlService");
const catchAsync = require("../utils/errorHandle/catchAsync");
const { returnSuccess, returnFail } = require('../utils/helperFn');
const { CODE } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES } = require("../constants/commonMessage");

const login = catchAsync(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, 'email or password'),
        CODE.INVALID
      );
    }
    const userData = await service.login(email, password);
    if (!userData.id) {
      throw userData;
    }
    return returnSuccess(req, res, CODE.SUCCESS, userData);
  } catch (e) {
    return returnFail(req, res, e);
  }
});

module.exports = { login };
