const format = require("string-format");
const db = require("../models");
const { CODE } = require("../constants/code");
const AppError = require("../utils/errorHandle/appError");
const { convertValue, objToArr } = require('../utils/convert/convert');
const { COMMON_MESSAGES } = require("../constants/commonMessage");

const create = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, name),
        CODE.INVALID
      );
    }
    const CategoryFetch = await db.Category.findOne({
      where: {
        name,
      },
    });
    // CategoryFetch.name = 'asdasd';
    // CategoryFetch.save();
    if (CategoryFetch) {
      throw new AppError(
        format(COMMON_MESSAGES.EXISTED, name),
        CODE.EXISTED
      );
    }
    const newCategory = await db.Category.create({
      name,
    });
    return newCategory;
  } catch (error) {
    return error;
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, id),
        CODE.INVALID
      );
    }
    const categoryFetch = await db.Category.findAll({
      where: { id },
    });
    if (categoryFetch.length === 0) {
      throw new AppError(
        format(COMMON_MESSAGES.NOT_FOUND, id),
        CODE.NOT_FOUND
      );
    }
    return categoryFetch;
  } catch (error) {
    return error;
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
    return CategoryFetch;
  } catch (error) {
    return error;
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(!{});
    const updateContents = convertValue(req.body);
    if (!id) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, id),
        CODE.INVALID
      );
    }
    const result = await db.Category.update(
      updateContents,
      {
        where: { id },
      }
    );
    if (result[0] === 0) {
      throw new AppError(
        format(COMMON_MESSAGES.NOT_FOUND, id),
        CODE.NOT_FOUND
      );
    }
    return "update success";
  } catch (error) {
    return error;
  }
};

const deletes = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new AppError(
        format(COMMON_MESSAGES.INVALID, id),
        CODE.INVALID
      );
    }

    await db.Category.destroy(
      {
        where: { id },
      }
    ).then((result) => {
      if (result === 0) {
        throw new AppError(
          format(COMMON_MESSAGES.NOT_FOUND, id),
          CODE.NOT_FOUND
        );
      }
    });
    return "delete success";
  } catch (error) {
    return error;
  }
};
module.exports = {
  create,
  getAll,
  getOne,
  update,
  deletes
};
