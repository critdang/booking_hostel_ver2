const format = require("string-format");
const _ = require("lodash");
const categoryService = require("../service/category.service");
const AppError = require("../utils/errorHandle/appError");
const ResponseHelper = require('../utils/response');
const MessageHelper = require('../utils/message');
const logger = require('../utils/logger/app-logger');

const createCategory = async (req, res) => {
  try {
    logger.info(`Category:createCategory::${JSON.stringify(req.body)}`);

    const data = await categoryService.createCategory(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`Category:createCategory:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};
const getCategories = async (req, res) => {
  try {
    logger.info(`Category:getCategories::${JSON.stringify(req.body)}`);

    const data = await categoryService.getCategories(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`Category:getCategories:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const getCategory = async (req, res) => {
  try {
    logger.info(`Category:getCategory::req.params${JSON.stringify(req.params)}`);

    const data = await categoryService.getCategory(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`Category:getCategory:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const updateCategory = async (req, res) => {
  try {
    logger.info(`Category:updateCategory::req.params${JSON.stringify(req.params)}`);
    logger.info(`Category:updateCategory::req.body${JSON.stringify(req.body)}`);
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'req.params')
      );
    }
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'req.body')
      );
    }

    const data = await categoryService.updateCategory(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`Category:updateCategory:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    logger.info(`Category:deleteCategory::req.params${JSON.stringify(req.params)}`);
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'req.params')
      );
    }

    await categoryService.deleteCategory(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('deleteCategorySuccess'));
  } catch (error) {
    logger.error(`Category:deleteCategory:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory
};
