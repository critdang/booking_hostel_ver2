const ResponseHelper = require('../utils/response');
const logger = require('../utils/logger/app-logger');
const service = require("../service/dashboard.service");

const login = async (req, res) => {
  try {
    logger.info(`UserAuthentication:login::${JSON.stringify(req.body)}`);
    const data = await service.login(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`UserAuthentication:login:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

module.exports = {
  login
};
