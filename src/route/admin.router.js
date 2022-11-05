// eslint-disable-next-line import/no-extraneous-dependencies
const express = require("express");
const controller = require("../controller/admin.controller");

const router = express.Router();

router.get("/verify/:token", controller.verifyUser);
module.exports = router;
