// eslint-disable-next-line import/no-extraneous-dependencies
const express = require("express");
const controller = require("../controller/admin.controller");

const router = express.Router();

// getting login URL

// getting the user from google with key

// getting current user
router.get("/forgotPassword/verify/:token", controller.verifyResetPassword);
router.post("/resetPassword/:tokenId", controller.resetPassword);
router.get("/logout", controller.logOut);
module.exports = router;
