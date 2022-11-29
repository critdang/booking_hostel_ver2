// eslint-disable-next-line import/no-extraneous-dependencies
const express = require("express");
const userController = require("../controller/user.controller");
const adminController = require("../controller/admin.controller");

const router = express.Router();
const { upload } = require("../utils/cloudinary/uploadImg");
const validate = require('../validate/validate');
const auth = require('../utils/middleware/auth');

router.post("/register", validate.handleRegisterValidate, userController.createUser);
router.put("/updateAvatar", auth.protectingRoutes, upload.single('avatar'), userController.updateAvatar);
router.post("/login", validate.handleLoginValidate, userController.login);
router.post("/refreshToken", userController.handleRefeshToken);
router.post("/forgotPassword", validate.handleForgotPasswordValidate, userController.forgotPassword);
router.put("/updateProfile", auth.protectingRoutes, validate.handleProfileValidateMethodValidate, userController.updateProfile);
router.put("/updatePassword", auth.protectingRoutes, userController.updatePassword);
router.get("/:userId", auth.protectingRoutes, auth.checkRole('admin'), userController.getUser);
router.get("/", auth.protectingRoutes, auth.checkRole('admin'), userController.getUsers);

router.get("/block/:id", adminController.changeBlockUserStt);

module.exports = router;
