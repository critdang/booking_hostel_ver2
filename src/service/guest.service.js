const format = require("string-format");
const db = require("../models");
const AppError = require("../utils/errorHandle/appError");
const MessageHelper = require('../utils/message');

const getGuests = async () => {
  const guestFetch = await db.Guest.findAll(
    {}
  );
  if (!guestFetch) {
    throw new AppError(
      format(MessageHelper.getMessage('cannotFindGuests')),
    );
  }
  return guestFetch;
};

module.exports = {
  getGuests
};
