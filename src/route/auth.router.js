// eslint-disable-next-line import/no-extraneous-dependencies
const express = require("express");
const controller = require("../controller/admin.controller");

const router = express.Router();

router.get("/verify/:token", controller.verifyUser);
router.get("/forgotPassword/verify/:token", controller.verifyResetPassword);
router.post("/resetPassword", controller.resetPassword);
module.exports = router;
