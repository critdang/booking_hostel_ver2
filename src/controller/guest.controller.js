const service = require("../service/guest.service");
const ResponseHelper = require('../utils/response');
const logger = require('../utils/logger/app-logger');

const getGuests = async (req, res) => {
  try {
    logger.info(`GuestAction:getGuests::`);

    const data = await service.getGuests(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.info(`GuestAction:getGuests:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

module.exports = {
  getGuests
};
