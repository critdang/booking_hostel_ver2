const format = require("string-format");
const db = require("../models");
const AppError = require("../utils/errorHandle/appError");
const { objToArr } = require('../utils/convert/convert');
const MessageHelper = require('../utils/message');

const createCategory = async (req) => {
  const { name, description } = req.body;
  const thumbnail = await req.file.path;

  const foundCategory = await db.Category.findOne({
    where: {
      name,
    },
  });

  if (foundCategory) {
    throw new AppError(
      format(MessageHelper.getMessage('categoryIsExisted'), name),
    );
  }
  const newCategory = await db.Category.create({
    name,
    description,
    thumbnail,
  });
  return newCategory;
};

const getCategories = async (req) => {
  const sort = objToArr(req.query);
  const foundCategory = await db.Category.findAll({ order: sort });
  if (!foundCategory) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundCategories')),
    );
  }
  return foundCategory;
};

const getCategory = async (req) => {
  const { id } = req.params;
  const foundCategory = await db.Category.findOne({
    where: { id },
  });
  if (!foundCategory) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundCategory'), id),
    );
  }
  return foundCategory;
};

const updateCategory = async (req) => {
  const { id } = req.params;
  const updateContents = req.body;
  const result = await db.Category.update(
    updateContents,
    {
      where: { id },
    }
  );
  if (!result) {
    throw new AppError(
      format(MessageHelper.getMessage('createCategoryFail'))
    );
  }
  return result;
};

const deleteCategory = async (req) => {
  const { id } = req.params;
  const result = await db.Category.destroy(
    {
      where: { id },
    }
  );
  if (result === 0) {
    throw new AppError(
      format(MessageHelper.getMessage('deleteCategoryFailId'), id),

    );
  }
};
module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory
};
