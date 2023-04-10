// eslint-disable-next-line import/no-extraneous-dependencies
const express = require("express");
const userController = require("../controller/user.controller");
const adminController = require("../controller/admin.controller");

const router = express.Router();
const { upload } = require("../utils/cloudinary/uploadImg");
const validate = require('../validate/validate');
const auth = require('../utils/middleware/auth');

// route for user register
router.post("/register", validate.handleRegisterValidate, userController.createUser);
// route for user change avatar
router.put("/updateAvatar", auth.protectingRoutes, upload.single('avatar'), userController.updateAvatar);
// route for user login
router.post("/login", validate.handleLoginValidate, userController.login);
// router.post("/login", userController.login);
// route for user forgot password
router.post("/forgotPassword", validate.handleForgotPasswordValidate, userController.forgotPassword);
// route for user update personal information
router.put("/updateProfile", auth.protectingRoutes, validate.handleProfileValidateMethodValidate, userController.updateProfile);
// route for user reset password
router.put("/updatePassword", validate.handleUpdatePassword, auth.protectingRoutes, userController.updatePassword);
// route for display user information (admin only)
// router.get("/:id", auth.protectingRoutes, auth.checkRole(['admin']), userController.getUser);
router.get("/:id", auth.protectingRoutes, auth.checkRole(['admin']), userController.getUser);
// route for display all user (admin only)
router.get("/", auth.protectingRoutes, auth.checkRole(['admin']), userController.getUsers);
// route for delete user (admin only)
router.delete("/:id", auth.protectingRoutes, auth.checkRole(['admin']), userController.deleteUser);
// route for user get access token
router.get("/rating", userController.ratingRoom);
// router.get("/", auth.protectingRoutes, auth.checkRole('admin'), userController.getUsers);
router.get("/", userController.getUsers);
router.get("/accessToken", (req) => { console.log(req.cookies); });

router.put("/block/:id", auth.protectingRoutes, auth.checkRole(['admin']), adminController.changeBlockUserStt);

router.post("/rating", auth.protectingRoutes, adminController.rating);

module.exports = router;
