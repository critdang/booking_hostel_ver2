require('dotenv').config();
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const fs = require('fs');
const pdf = require('html-pdf');
const { google } = require('googleapis');

const googleDrive = require('../config/googleApi');

exports.returnSuccess = (req, res, code, data = "") => {
  res.status(200).json({
    code: 200,
    status: "success",
    data,
  });
};

exports.returnFail = (req, res, err) => {
  res.status(400).json({
    code: err.statusCode ? err.statusCode : "404",
    status: err.status ? err.status : "error",
    message: err.message,
  });
};

exports.hashPassword = async (password) => {
  const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);
  const hashPassword = await bcrypt.hash(password, saltRounds);
  return hashPassword;
};

// config transporter to send mail
let config;
if (process.env.NODE_ENV === 'production') {
  config = {
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: 'false',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  };
} else {
  config = {
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS
    }
  };
}

const transporter = nodemailer.createTransport(config);
// const transporter = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: process.env.AUTH_USER,
//     pass: process.env.AUTH_PASS
//   }
// });
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   host: 'smtp.gmail.com',
//   secure: 'false',
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.EMAIL_PASSWORD
//   }
// });

exports.sendMail = async (
  email,
  subject,
  text,
  endpoint = '/',
  token = '',
) => {
  const domain = `http://localhost:${process.env.PORT}`;

  const link = `${domain + endpoint + token}`;
  const viewTemplate = await ejs.renderFile('./src/views/createVerifyNoti/verify.ejs', { link });
  const mailOption = {
    from: process.env.EMAIL,
    to: email,
    subject,
    html: viewTemplate,
  };
  await transporter.sendMail(mailOption);
};

exports.forgotPassword = async (to, token) => {
  const link = `${process.env.PORT_FE}/forgotPassword/verify/${token}`;
  const data = await ejs.renderFile('./src/views/createForgotPassNoti/forgotPassword.ejs', { link });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject: 'Reset Password',
    text: 'Dear customer',
    html: data,
  });
};

exports.notifyOrder = async (to, order) => {
  const confirmCheckIn = `${process.env.DOMAIN_BE_PROD}/order/confirmCheckIn/${order.code}`;
  const data = await ejs.renderFile('./src/views/createOrderNoti/order.ejs', { order, confirmCheckIn });
  const options = { format: 'Letter' };

  // create pdf file
  // pdf.create(data, options).toFile('./onlineCheckInTicket.pdf', (err, res) => {
  //   if (err) return console.log(err);
  //   console.log(res);
  // });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject: 'Notification about your order',
    text: 'Dear customer',
    html: data,
  });
};

exports.confirmCheckIn = async (foundOrder, dataAdmin) => {
  const html = ejs.render(fs.readFileSync('./src/views/createInvoice/invoice_order_receipt.ejs', 'utf8'), { order: foundOrder, admin: dataAdmin });
  const options = { format: 'Letter' };
  pdf.create(html, options).toFile('./onlineCheckInTicket.pdf', (err, res) => {
    if (err) return console.log(err);
    console.log("🚀 ~ file: helperFn.js:130 ~ pdf.create ~ res:", res)
  });
  googleDrive.uploadFile();
  return 'success';
};

const driveUpload = async (file) => {

};