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
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

exports.sendMail = async (
  email,
  subject,
  text,
  endpoint = '/',
  token = '',
) => {
  const domain = 'http://localhost:8080';

  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS
    }
  });
  const link = `${domain + endpoint + token}`;
  // const data = await ejs.renderFile('./src/views/createVerifyNoti/verify.ejs', { link });

  const mailOption = {
    from: process.env.EMAIL,
    to: email,
    subject,
    html: `<h1>${link}</h1>`,
  };
  await transporter.sendMail(mailOption);
};
