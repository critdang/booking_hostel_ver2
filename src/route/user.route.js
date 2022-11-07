// eslint-disable-next-line import/no-extraneous-dependencies
const express = require("express");
const userController = require("../controller/user.controller");
const adminController = require("../controller/admin.controller");

const router = express.Router();
const { upload } = require("../utils/uploadImg");
const auth = require('../utils/middleware/auth');

router.post("/register", auth.protectingRoutes, upload.single('avatar'), userController.createUser);
router.put("/updateProfile", auth.protectingRoutes, userController.updateProfile);
router.put("/updateAvatar", auth.protectingRoutes, upload.single('avatar'), userController.updateAvatar);
router.post("/login", auth.loginLimiter, userController.login);
router.post("/forgotPassword", auth.protectingRoutes, userController.forgotPassword);
router.get("/:userId", auth.protectingRoutes, auth.checkRole('admin'), userController.getUser);
router.get("/", auth.protectingRoutes, auth.checkRole('admin'), userController.getUsers);

router.get("/block/:id", adminController.changeBlockUserStt);

module.exports = router;
