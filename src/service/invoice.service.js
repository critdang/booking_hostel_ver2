/* eslint-disable no-loop-func */
const format = require("string-format");
const moment = require('moment');
const db = require("../models");
const AppError = require("../utils/errorHandle/appError");
const MessageHelper = require('../utils/message');
const { sequelize } = require("../config/connectDB");
const helperFn = require('../utils/helperFn');

const getInvoice = async (req) => {
  const { invoiceId } = req.params;
  const foundInvoice = await db.Invoice.findOne({
    where: {
      id: invoiceId,
    }
  });
  if (!foundInvoice) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundInvoice'), invoiceId),
    );
  }
  return foundInvoice;
};

const getInvoices = async () => {
  const foundInvoices = await db.Invoice.findAll();
  if (!foundInvoices) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundInvoices')),
    );
  }
  return foundInvoices;
};

const changeStatus = async (req) => {
  const { invoiceId } = req.params;
  const { newStatus } = req.body;

  const updateStatus = await db.Invoice.update(
    { status: newStatus },
    {
      where: {
        id: invoiceId,
        status: 'pending',
      }
    }
  );
  if (!updateStatus) {
    throw new AppError(
      format(MessageHelper.getMessage('updateStatusOderFailed')),
    );
  }
  return updateStatus;
};

const updateInvoice = async (req) => {
  const id = req.params.invoiceId;
  const { newStatus } = req.body;

  const result = await db.Invoice.update(
    { status: newStatus },
    {
      where: {
        id,
        status: 'pending',
      }
    }
  );
  if (!result) {
    throw new AppError(
      format(MessageHelper.getMessage('updateInvoiceFailed')),
    );
  }
  return result;
};

const createInvoice = async (req) => {
  const userInfo = req.user;
  const {
    paymentMethod, guestInfo, rooms, searchInfo
  } = req.body;
  let guestId = null;
  const code = Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substring(1, 6);
  let total = 0;
  const foundRooms = [];
  for (const room of rooms) {
    const foundRoom = await db.Room.findOne({
      where: { id: room.roomId },
      attributes: ['name', 'price'],
      include: [{
        model: db.Category,
        attributes: ['name']
      }],
      raw: true,
      nest: true
    });
    foundRoom.from = moment((searchInfo.From)).format('DD/MM/YYYY');
    foundRoom.to = moment((searchInfo.To)).format('DD/MM/YYYY');
    foundRoom.category = foundRoom.Category.name;
    foundRooms.push(foundRoom);
    total += foundRoom.price;
  }
  // check thiếu req.body bên controller
  // đẩy tạo user xuống transaction -> tránh tạo user khi tạo invoice thất bại
  if (guestInfo) {
    const newGuest = await db.Invoice.create(guestInfo);
    guestId = newGuest.id;
  }
  await sequelize.transaction(async (t) => {
    // create invoice
    const newInvoice = await db.Invoice.create({
      code,
      date: new Date(),
      userId: (userInfo == undefined) ? null : userInfo.id,
      guestId,
      paymentMethod,
      total,
    }, { transaction: t });

    for (const room of rooms) {
      // create room date
      await db.RoomDate.create({
        roomId: room.roomId,
        from: searchInfo.From,
        to: searchInfo.To,
      }, { transaction: t });
      // create room in invoice
      await db.RoomBooking.create({
        roomId: room.roomId,
        from: searchInfo.From,
        to: searchInfo.To,
        invoiceId: newInvoice.id,
      }, { transaction: t });
    }
    newInvoice.date = moment(newInvoice.date).format('DD/MM/YYYY');
    newInvoice.userInfo = userInfo;
    newInvoice.guestInfo = guestInfo;
    newInvoice.rooms = foundRooms;
    return helperFn.notifyInvoice(guestInfo.email, newInvoice);
  });
};

const confirmCheckIn = async (req, res) => {
  const { code } = req.params;

  if (req.user && req.user.role == 'admin') {
    const updateStatusRoom = await db.Invoice.update(
      { checkInDate: new Date() },
      { where: { code }, }
    );
    if (!updateStatusRoom) {
      throw new AppError(
        format(MessageHelper.getMessage('noFoundInvoiceWithCode'), code),
      );
    }
  }
  const foundInvoice = await db.Invoice.findOne(
    {
      where: {
        code,
      },
      include: [
        {
          model: db.Guest,
        }, {
          model: db.RoomBooking,
          include: [{
            model: db.Room,
          }],
        }],
      raw: true,
      nest: true
    }
  );
  if (!foundInvoice) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundInvoiceWithCode'), code),
    );
  }
  return res.render('createInvoice/invoice_receipt', { invoice: foundInvoice, admin: req.user });
  // await helperFn.confirmCheckIn(foundInvoice, req.user);
  // return foundInvoice;
};

const viewInvoice = async (req, res) => {
  const { option } = req.params;
  const foundInvoice = await db.Invoice.findOne({ where: { userId: req.user.id }, attributes: ['id', 'code', 'date', 'total', 'paymentMethod', 'userId'] });
  // foundInvoice.date = moment(foundInvoice.date).format('DD/MM/YYYY, h:mm:ss a');
  foundInvoice.userInfo = await db.User.findOne({ where: { id: foundInvoice.userId }, attributes: ['id', 'fullname', 'email', 'phone', 'address'] });
  const foundRoomBooking = await db.RoomBooking.findAll({ where: { invoiceId: foundInvoice.id }, attributes: ['roomId', 'from', 'to'] });
  const rooms = [];
  for (const RoomBooking of foundRoomBooking) {
    const foundRoom = await db.Room.findOne({
      where: { id: RoomBooking.roomId },
      attributes: ['name', 'price'],
      include: [{
        model: db.Category,
        attributes: ['name']
      }],
      raw: true,
      nest: true
    });
    foundRoom.from = moment((RoomBooking.from)).format('DD/MM/YYYY, HH:mm');
    foundRoom.to = moment((RoomBooking.to)).format('DD/MM/YYYY, HH:mm');
    foundRoom.category = foundRoom.Category.name;
    rooms.push(foundRoom);
  }
  foundInvoice.rooms = rooms;
  foundInvoice.confirmCheckInLink = `http://localhost:8080/invoice/confirmCheckIn/${foundInvoice.code}`;
  console.log("🚀 ~ file: invoice.service.js:209 ~ viewInvoice ~ foundInvoice:", foundInvoice)
  res.render('createInvoiceNoti/invoice', { invoice: foundInvoice });
};
module.exports = {
  getInvoice,
  getInvoices,
  changeStatus,
  updateInvoice,
  createInvoice,
  viewInvoice,
  confirmCheckIn
};
