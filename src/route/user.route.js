// eslint-disable-next-line import/no-extraneous-dependencies
const express = require("express");
const userController = require("../controller/user.controller");
const adminController = require("../controller/admin.controller");

const router = express.Router();
const { upload } = require("../utils/uploadImg");
const validate = require('../validate/validate');
const auth = require('../utils/middleware/auth');

router.post("/register", upload.single('avatar'), validate.handleRegisterValidate, userController.createUser);
router.put("/updateProfile", auth.protectingRoutes, userController.updateProfile);
router.put("/updateAvatar", auth.protectingRoutes, upload.single('avatar'), userController.updateAvatar);
router.post("/login", auth.loginLimiter, validate.handleLoginValidate, userController.login);
router.post("/forgotPassword", validate.handleForgotPasswordValidate, userController.forgotPassword);
router.get("/:userId", auth.protectingRoutes, auth.checkRole('admin'), userController.getUser);
router.get("/", auth.protectingRoutes, auth.checkRole('admin'), userController.getUsers);

router.get("/block/:id", adminController.changeBlockUserStt);

module.exports = router;
