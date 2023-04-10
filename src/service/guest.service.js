const format = require("string-format");
const db = require("../models");
const AppError = require("../utils/errorHandle/appError");
const MessageHelper = require('../utils/message');

const createGuest = async (req) => {
  const inputData = req.body;
  inputData.role = 'guest';
  const newGuest = await db.User.create(inputData);
  return newGuest;
};
const getGuests = async () => {
  const foundGuest = await db.User.findAll(
    {
      where: { role: 'guest' },
    }
  );
  if (!foundGuest) {
    throw new AppError(
      format(MessageHelper.getMessage('cannotFindGuests')),
    );
  }
  return foundGuest;
};

const getGuest = async (req) => {
  const { id } = req.params;
  const foundGuest = await db.User.findOne(
    {
      where: { id, role: 'guest' },
    }
  );
  if (!foundGuest) {
    throw new AppError(
      format(MessageHelper.getMessage('cannotFindGuestsWithId'), id),
    );
  }
  return foundGuest;
};

const updateGuest = async (req) => {
  const { id } = req.params;
  const inputData = req.body;
  const foundGuest = await db.User.findOne({ where: { id, role: 'guest' } });
  if (!foundGuest) {
    throw new AppError(
      format(MessageHelper.getMessage('cannotFindGuestsWithId'), id),
    );
  }
  const updatedGuest = await db.User.update(inputData, { where: { id } });
  return updatedGuest;
};

const deleteGuest = async (req) => {
  const { id } = req.params;
  const foundGuest = await db.User.findOne({ where: { id, role: 'guest' } });
  if (!foundGuest) {
    throw new AppError(
      format(MessageHelper.getMessage('cannotFindGuestsWithId'), id),
    );
  }
  await db.User.destroy({ where: { id } });
};

module.exports = {
  createGuest,
  getGuests,
  getGuest,
  updateGuest,
  deleteGuest
};
