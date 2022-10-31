const format = require("string-format");
const categoryService = require("../service/categoryService");
const { returnSuccess, returnFail } = require("../utils/helperFn");
const { CODE } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES } = require("../constants/commonMessage");

const create = async (req, res) => {
  try {
    if (!req.body) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, req.body),
        CODE.INVALID
      );
    }
    categoryService.create(req, res);
  } catch (e) {
    console.log(e);
  }
};
const getAll = async (req, res) => {
  try {
    categoryService.getAll(req, res);
  } catch (e) {
    console.log(e);
  }
};

const getOne = async (req, res) => {
  try {
    categoryService.getOne(req, res);
  } catch (e) {
    console.log(e);
  }
};

const update = async (req, res) => {
  try {
    categoryService.update(req, res);
  } catch (e) {
    console.log(e);
  }
};

const deletes = async (req, res) => {
  try {
    categoryService.deletes(req, res);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  deletes
};
