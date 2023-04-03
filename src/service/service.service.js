const format = require("string-format");
const db = require("../models");
const AppError = require("../utils/errorHandle/appError");
const { objToArr } = require('../utils/convert/convert');
const MessageHelper = require('../utils/message');
// const {test} = require('../utils/cloudinary/cloudinary');
// const testSeed = require('../utils/cloudinary/test');

const getServices = async (req) => {
  // const sort = objToArr(req.query);
  // testSeed();
  const foundServices = await db.Service.findAll({
    attributes: ['name', 'price', 'image'],
    raw: true
  });
  if (!foundServices) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundCategories')),
    );
  }
  return foundServices;
};

module.exports = {
  getServices,
};
