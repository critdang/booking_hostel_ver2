const service = require("../service/guest.service");
const ResponseHelper = require('../utils/response');
const logger = require('../utils/logger/app-logger');
const MessageHelper = require('../utils/message');

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

const getGuest = async (req, res) => {
  try {
    logger.info(`GuestAction:getGuest::`);

    const data = await service.getGuest(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.info(`GuestAction:getGuest:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const createGuest = async (req, res) => {
  try {
    logger.info(`GuestAction:createGuest::`);

    const data = await service.createGuest(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.info(`GuestAction:createGuest:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const updateGuest = async (req, res) => {
  try {
    logger.info(`GuestAction:updateGuest::`);

    const data = await service.updateGuest(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.info(`GuestAction:updateGuest:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const deleteGuest = async (req, res) => {
  try {
    logger.info(`GuestAction:deleteGuest::`);

    await service.deleteGuest(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('deleteGuestSuccess'));
  } catch (error) {
    logger.info(`GuestAction:deleteGuest:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

module.exports = {
  createGuest,
  getGuests,
  getGuest,
  updateGuest,
  deleteGuest
};
