// eslint-disable-next-line import/no-extraneous-dependencies
const express = require("express");
const controller = require("../controller/control.controller");

const router = express.Router();
const validate = require("../validate/validate");
const { upload } = require("../utils/uploadImg");

router.post("/login", controller.login);
module.exports = router;
