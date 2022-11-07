require('dotenv').config();
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const ejs = require('ejs');

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
const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS
  }
});

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
  const link = `http://localhost:${process.env.PORT}/forgotPassword/verify/${token}`;
  const data = await ejs.renderFile('./src/views/createForgotPassNoti/forgotPassword.ejs', { link });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject: 'Reset Password',
    text: 'Dear customer',
    html: data,
  });
};
