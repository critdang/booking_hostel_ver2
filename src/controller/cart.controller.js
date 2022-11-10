const _ = require("lodash");
const db = require('../models');
const { returnSuccess, returnFail } = require('../utils/helperFn');
const { CODE } = require("../constants/code");
const cartService = require('../service/cart.service');
const logger = require('../utils/logger/app-logger');
const ResponseHelper = require('../utils/response');
const MessageHelper = require('../utils/message');

const addToCart = async (req, res) => {
  try {
    logger.info(`Category:getCategories::${JSON.stringify(req.body)}`);

    // if (_.isEmpty(req.body)) {
    //   throw new AppError(
    //     format(COMMON_MESSAGES.EMPTY, "body"),
    //     CODE.INVALID
    //   );
    // }

    await cartService.addToCart(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('addRoomSuccess'));
  } catch (error) {
    logger.error(`Category:createCategory:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

const getItemInCart = async (req, res) => {
  try {
    const data = await cartService.getItemInCart(req, res);
    if (data instanceof Error) {
      throw data;
    }
    return returnSuccess(req, res, CODE.SUCCESS, data);
  } catch (error) {
    return returnFail(req, res, error);
  }
};

const removeItemFromCart = async (req, res) => {
  try {
    logger.info(`Category:getCategories::${JSON.stringify(req.params)}`);

    await cartService.removeItemFromCart(req, res);
    ResponseHelper.responseSuccess(res, MessageHelper.getMessage('removeItemCartSuccess'));
  } catch (error) {
    logger.error(`Category:createCategory:: -  ${error}`);
    ResponseHelper.responseError(res, error.message);
  }
};

module.exports = {
  addToCart, getItemInCart, removeItemFromCart
};
