const format = require("string-format");
const db = require("../models");
const { returnSuccess, returnFail } = require("../utils/helperFn");
const { CODE } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { convertValue, objToArr } = require('../utils/convert/convert');
const { COMMON_MESSAGES } = require("../constants/commonMessage");

const create = async (req, res) => {
  try {
    const { categoryName } = req.body;
    if (!categoryName) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, categoryName),
        CODE.INVALID
      );
    }
    const CategoryFetch = await db.Category.findOne({
      where: {
        categoryName,
      },
    });
    // CategoryFetch.categoryName = 'asdasd';
    // CategoryFetch.save();
    if (CategoryFetch) {
      throw new AppError(
        format(COMMON_MESSAGES.EXISTED, categoryName),
        CODE.EXISTED
      );
    }
    const newCategory = await db.Category.create({
      categoryName,
    });
    return returnSuccess(req, res, CODE.SUCCESS, newCategory);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const getOne = async (req, res) => {
  try {
    const { fieldname, value } = req.params;
    if (!fieldname || !value) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, fieldname),
        CODE.INVALID
      );
    }
    const condition = {};
    condition[fieldname] = value;
    const categoryFetch = await db.Category.findAll({
      where: condition,
    });
    if (categoryFetch.length === 0) {
      throw new AppError(
        format(COMMON_MESSAGES.NOT_FOUND, value),
        CODE.NOT_FOUND
      );
    }
    return returnSuccess(req, res, CODE.SUCCESS, categoryFetch);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const getAll = async (req, res) => {
  const sort = objToArr(convertValue(req.query));
  console.log(sort);
  try {
    const CategoryFetch = await db.Category.findAll({ order: sort });
    if (!CategoryFetch) {
      throw new AppError(
        format(COMMON_MESSAGES.ERROR, CategoryFetch),
        CODE.ERROR
      );
    }
    return returnSuccess(req, res, CODE.SUCCESS, CategoryFetch);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const update = async (req, res) => {
  try {
    const { fieldname, value } = req.params;
    const updateContents = convertValue(req.body);
    if (!fieldname || !value) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, value),
        CODE.INVALID
      );
    }
    const condition = {};
    condition[fieldname] = value;
    await db.Category.update(
      updateContents,
      {
        where: condition,
      }
    ).then((result) => {
      if (result[0] === 0) {
        throw new AppError(
          format(COMMON_MESSAGES.NOT_FOUND, value),
          CODE.NOT_FOUND
        );
      }
    });

    return returnSuccess(req, res, CODE.SUCCESS, "update success");
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const deletes = async (req, res) => {
  try {
    const { fieldname, value } = req.params;
    if (!fieldname || !value) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, value),
        CODE.INVALID
      );
    }
    const condition = {};
    condition[fieldname] = value;
    await db.Category.destroy(
      {
        where: condition,
      }
    ).then((result) => {
      if (result === 0) {
        throw new AppError(
          format(COMMON_MESSAGES.NOT_FOUND, value),
          CODE.NOT_FOUND
        );
      }
    });
    return returnSuccess(req, res, CODE.SUCCESS, "delete success");
  } catch (error) {
    return returnFail(req, res, error);
  }
};
module.exports = {
  create,
  getAll,
  getOne,
  update,
  deletes
};
