const format = require("string-format");
const _ = require("lodash");
const serviceService = require("../service/service.service");
const AppError = require("../utils/errorHandle/appError");
const ResponseHelper = require('../utils/response');
const MessageHelper = require('../utils/message');
const logger = require('../utils/logger/app-logger');

const getServices = async (req, res) => {
  try {
    logger.info(`Service:getServices::${JSON.stringify(req.body)}`);

    const data = await serviceService.getServices(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`Service:getServices:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

module.exports = {
  getServices
};
