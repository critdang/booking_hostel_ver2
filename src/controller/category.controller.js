const format = require("string-format");
const _ = require("lodash");
const categoryService = require("../service/category.service");
const { returnSuccess, returnFail } = require("../utils/helperFn");
const { CODE } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { COMMON_MESSAGES } = require("../constants/commonMessage");

const createCategory = async (req, res) => {
  try {
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(COMMON_MESSAGES.EMPTY, "body"),
        CODE.INVALID
      );
    }
    const data = await categoryService.createCategory(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (error) {
    return returnFail(req, res, error);
  }
};
const getCategories = async (req, res) => {
  try {
    const data = await categoryService.getCategories(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const getCategory = async (req, res) => {
  try {
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, req.params),
        CODE.INVALID
      );
    }
    const data = await categoryService.getCategory(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const updateCategory = async (req, res) => {
  try {
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, req.params),
        CODE.INVALID
      );
    }
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(COMMON_MESSAGES.EMPTY, "body"),
        CODE.INVALID
      );
    }
    const data = await categoryService.updateCategory(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, COMMON_MESSAGES.UPDATE_CATE_SUCCESS);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const deleteCategory = async (req, res) => {
  try {
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, req.params),
        CODE.INVALID
      );
    }
    const data = await categoryService.deletes(req, res);
    if (data instanceof AppError) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory
};
