const format = require("string-format");
const _ = require("lodash");
const invoiceService = require("../service/invoice.service");
const AppError = require("../utils/errorHandle/appError");
const logger = require('../utils/logger/app-logger');

const ResponseHelper = require('../utils/response');
const MessageHelper = require('../utils/message');

const getInvoice = async (req, res) => {
  try {
    logger.info(`UserAction:updateProfile::${JSON.stringify(req.params)}`);

    const data = await invoiceService.getInvoice(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    console.log("🚀 ~ file: invoice.controller.js:17 ~ getInvoice ~ error:", error);
    logger.error(`InvoiceActions:getInvoice:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const getInvoiceByUserId = async (req, res) => {
  try {
    logger.info(`UserAction:updateProfile::${JSON.stringify(req.params)}`);

    const data = await invoiceService.getInvoiceByUserId(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    console.log("🚀 ~ file: invoice.controller.js:17 ~ getInvoice ~ error:", error);
    logger.error(`InvoiceActions:getInvoice:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};
const getInvoices = async (req, res) => {
  try {
    const data = await invoiceService.getInvoices(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`InvoiceActions:getInvoices:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const changeStatus = async (req, res) => {
  try {
    logger.info(`InvoiceActions:changeStatus::req.parms - ${JSON.stringify(req.parms)}`);
    logger.info(`InvoiceActions:changeStatus::req.body - ${JSON.stringify(req.body)}`);
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'body')
      );
    }
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'req.params')
      );
    }

    const data = await invoiceService.changeStatus(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`InvoiceActions:changeStatus:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const updateInvoice = async (req, res) => {
  try {
    logger.info(`InvoiceActions:updateInvoice::req.parms - ${JSON.stringify(req.parms)}`);
    logger.info(`InvoiceActions:updateInvoice::req.body - ${JSON.stringify(req.body)}`);
    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'body')
      );
    }
    if (_.isEmpty(req.params)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'req.params')
      );
    }

    const data = await invoiceService.updateInvoice(req, res);
    ResponseHelper.responseSuccess(res, data);
  } catch (error) {
    logger.error(`InvoiceActions:changeStatus:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const createInvoice = async (req, res) => {
  try {
    logger.info(`Invoice:getInvoice::${JSON.stringify(req.body)}`);

    if (_.isEmpty(req.body)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), "body"),
      );
    }

    await invoiceService.createInvoice(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('creatInvoiceSuccess'));
  } catch (error) {
    console.log("🚀 ~ file: invoice.controller.js ~ line 91 ~ createInvoice ~ error", error);
    logger.error(`Invoice:createInvoice:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const confirmCheckIn = async (req, res) => {
  try {
    logger.info(`Invoice:confirmCheckIn::${JSON.stringify(req?.params)}`);

    if (_.isEmpty(req?.params)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'req.params')
      );
    }

    await invoiceService.confirmCheckIn(req, res);
    // ResponseHelper.responseSuccess(res, MessageHelper.getMessage('confirmCheckInSuccess'));
  } catch (error) {
    console.log("🚀 ~ file: invoice.controller.js:110 ~ confirmCheckIn ~ error", error);
    logger.error(`Invoice:confirmCheckIn:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};
const viewInvoice = async (req, res) => {
  try {
    await invoiceService.viewInvoice(req, res);
  } catch (error) {
    console.log(error);
  }
};

const checkOut = async (req, res) => {
  try {
    logger.info(`Invoice:checkOut::${JSON.stringify(req?.params)}`);

    if (_.isEmpty(req?.params)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'req.params')
      );
    }

    await invoiceService.checkOut(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('checkOutSuccess'));
  } catch (error) {
    logger.error(`Invoice:checkOut:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const checkIn = async (req, res) => {
  try {
    logger.info(`Invoice:checkIn::${JSON.stringify(req?.params)}`);

    if (_.isEmpty(req?.params)) {
      throw new AppError(
        format(MessageHelper.getMessage('missingParams'), 'req.params')
      );
    }

    await invoiceService.checkIn(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('checkInSuccess'));
  } catch (error) {
    logger.error(`Invoice:checkIn:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

module.exports = {
  getInvoice,
  getInvoices,
  changeStatus,
  updateInvoice,
  createInvoice,
  confirmCheckIn,
  viewInvoice,
  getInvoiceByUserId,
  checkOut,
  checkIn
};
