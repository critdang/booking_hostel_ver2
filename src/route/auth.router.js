const express = require("express");
const controller = require("../controller/admin.controller");

const router = express.Router();
router.get("/forgotPassword/verify/:token", controller.verifyResetPassword);
router.post("/resetPassword/:tokenId", controller.resetPassword);
router.post("/refreshToken", controller.handleRefeshToken);
router.get("/logout", controller.logOut);
module.exports = router;
