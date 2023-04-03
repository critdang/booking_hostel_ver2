const express = require("express");
const controller = require("../controller/dashboard.controller");
const validate = require('../validate/validate');

const router = express.Router();
// route for user login
router.post("/", validate.handleLoginValidate, controller.login);
module.exports = router;
