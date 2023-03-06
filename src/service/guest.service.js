const format = require("string-format");
const db = require("../models");
const AppError = require("../utils/errorHandle/appError");
const MessageHelper = require('../utils/message');

const createGuest = async (req) => {
  const inputData = req.body;
  const newGuest = await db.Guest.create(inputData);
  return newGuest;
};
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

const updateGuest = async (req) => {
  const { id } = req.params;
  const inputData = req.body;
  const guestFetch = await db.Guest.findOne({ where: { id } });
  if (!guestFetch) {
    throw new AppError(
      format(MessageHelper.getMessage('cannotFindGuestsWithId')),
    );
  }
  const updatedGuest = await db.Guest.update(inputData, { where: { id } });
  return updatedGuest;
};

const deleteGuest = async (req) => {
  const { id } = req.params;
  const foundGuest = await db.Guest.findOne({ where: { id } });
  if (!foundGuest) {
    throw new AppError(
      format(MessageHelper.getMessage('cannotFindGuestsWithId'), id),
    );
  }
  await db.Guest.destroy({ where: { id } });
};

module.exports = {
  createGuest,
  getGuests,
  updateGuest,
  deleteGuest
};
