// eslint-disable-next-line import/no-extraneous-dependencies
const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();
const validate = require("../validate/validate");
const { upload } = require("../utils/uploadImg");

router.post("/register", upload.single('avatar'), userController.createUser);
router.post("/login", userController.login);
router.post("/forgotPassword", userController.forgotPassword);
module.exports = router;
