const service = require("../service/controlService");
const catchAsync = require("../utils/errorHandle/catchAsync");
const { returnSuccess, returnFail } = require('../utils/helperFn');
const { CODE } = require("../constants/code");

const login = catchAsync(async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await service.login(email, password);
    if (!userData.id) {
      throw userData;
    }
    return returnSuccess(req, res, CODE.SUCCESS, userData);
  } catch (e) {
    console.log(e);
    return returnFail(req, res, e);
  }
});

const createUser = async (req, res) => {
  try {
    // req.body.image = req.file.originalname;
    const data = await service.createUser(req.body, req.file);
    if (!data.id) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (error) {
    return returnFail(req, res, error);
  }
};
module.exports = { login, createUser };
