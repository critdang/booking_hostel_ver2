// eslint-disable-next-line import/no-extraneous-dependencies
const express = require("express");
const controller = require("../controller/admin.controller");

const router = express.Router();

router.get("/verify/:token", controller.verifyUser);
router.get("/block/:id", controller.changeBlockUserStt);
router.get("/forgotPassword/verify/:token", controller.verifyResetPassword);
router.get("/resetPassword", controller.resetPassword);

module.exports = router;
