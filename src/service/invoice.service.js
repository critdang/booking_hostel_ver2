/* eslint-disable no-loop-func */
const format = require("string-format");
const moment = require('moment');
const db = require("../models");
const AppError = require("../utils/errorHandle/appError");
const MessageHelper = require('../utils/message');
const { sequelize } = require("../config/connectDB");
const helperFn = require('../utils/helperFn');
const admin = require('../config/configFirebase');

const getInvoice = async (req) => {
  const { invoiceId } = req.params;
  // [START] - query services from Firebase
  const dbFireBase = admin.database();
  const serviceRef = dbFireBase.ref('service');
  // Define an async function to retrieve service data from Firebase
  const getServices = async () => {
    const snapshot = await serviceRef.once('value');
    return snapshot.val();
  };

  // Wait for the Firebase query and the database queries to complete
  const [servicesData] = await Promise.all([
    getServices(),
  ]);

  // Transform the services data from Firebase to an array of objects
  const services = [{ ...servicesData }];
  // get total services price
  const totalServicesPrice = services.reduce((acc, curr) => acc + curr.price, 0);

  // [END] - query services from Firebase
  const foundInvoice = await db.Invoice.findOne({
    where: {
      id: invoiceId,
    },
    include: [{
      model: db.RoomBooking,
      include: {
        model: db.Room,
        include: {
          model: db.Branch,
        }
      }
    }],
    raw: true,
    nest: true,
  });
  const extractedInvoice = {
    id: foundInvoice.id,
    code: foundInvoice.code,
    checkinDate: foundInvoice.checkinDate,
    checkoutDate: foundInvoice.checkoutDate,
    status: foundInvoice.status,
    paymentMethod: foundInvoice.paymentMethod,
    paymentDate: foundInvoice.paymentDate,
    paymentAccountName: foundInvoice.paymentAccountName,
    paymentAccountNumber: foundInvoice.paymentAccountNumber,
    checkInStatus: foundInvoice.checkInStatus,
    total: foundInvoice.total,
  };
  const extractedBranch = {
    id: foundInvoice.RoomBookings.Room.Branch.id,
    name: foundInvoice.RoomBookings.Room.Branch.name,
    address: foundInvoice.RoomBookings.Room.Branch.address,
    phone: foundInvoice.RoomBookings.Room.Branch.phone,
    email: foundInvoice.RoomBookings.Room.Branch.email,
  };
  const foundCustomer = await db.User.findOne({
    where: {
      id: foundInvoice.userId,
    },
    attributes: { exclude: ['password', 'resetToken', 'role', 'status', 'isBlocked'] }
  });

  const total = foundInvoice.total + totalServicesPrice;
  if (!foundInvoice) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundInvoice'), invoiceId),
    );
  }
  if (!foundCustomer) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundUser'), foundInvoice.userId),
    );
  }

  const result = {
    invoice: extractedInvoice,
    customer: foundCustomer,
    branch: extractedBranch,
    services,
    total,
    totalServicesPrice
  };
  return result;
};
const getInvoiceByUserId = async (req) => {
  const { userId } = req.params;
  const foundInvoices = await db.Invoice.findOne({
    where: {
      userId,
      status: 'pending',
    },
  });
  if (!foundInvoices) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundInvoices')),
    );
  }
  return foundInvoices;
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
  const updateContent = req.body;

  const result = await db.Invoice.update(
    updateContent,
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
  const {
    payment, customerInfo, rooms, searchInfo
  } = req.body;

  // if user is not logged in, create a guest in user table
  let userId = null;
  let userInfo = req.user;
  if (!userInfo) {
    userInfo = customerInfo;
    customerInfo.role = 'customer';
    customerInfo.avatar = 'default.jpg';
    const newGuest = await db.User.create(customerInfo);
    userId = newGuest.id;
  } else {
    userId = userInfo.id;
  }
  // find rooms
  const code = Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substring(1, 6);
  let total = 0;
  const { paymentMethod } = payment;
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
  await sequelize.transaction(async (t) => {
    // create invoice
    const newInvoice = await db.Invoice.create({
      code,
      date: new Date(),
      userId,
      checkinDate: searchInfo.From,
      checkoutDate: searchInfo.To,
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
        adults: searchInfo.adults,
        kids: searchInfo.kids,
        invoiceId: newInvoice.id,
      }, { transaction: t });
    }
    newInvoice.date = moment(newInvoice.date).format('DD/MM/YYYY');
    newInvoice.userInfo = userInfo;
    newInvoice.rooms = foundRooms;
    return helperFn.notifyInvoice(userInfo.email, newInvoice);
  });
};

// function confirmCheckIn use to confirm check in when user click on link in email
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
  // const { option } = req.params;
  const foundInvoice = await db.Invoice.findOne({ where: { userId: req.user.id }, attributes: ['id', 'code', 'paymentDate', 'total', 'paymentMethod', 'userId'] });
  foundInvoice.paymentDate = moment(foundInvoice.paymentDate).format('DD/MM/YYYY, h:mm:ss a');
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
  res.render('createInvoiceNoti/invoice', { invoice: foundInvoice });
};
module.exports = {
  getInvoice,
  getInvoices,
  changeStatus,
  updateInvoice,
  createInvoice,
  viewInvoice,
  confirmCheckIn,
  getInvoiceByUserId
};
