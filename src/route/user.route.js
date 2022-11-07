// eslint-disable-next-line import/no-extraneous-dependencies
const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();
const { upload } = require("../utils/uploadImg");
const auth = require('../utils/middleware/auth');

router.post("/register", upload.single('avatar'), userController.createUser);
router.put("/updateProfile", auth.protectingRoutes, userController.updateProfile);
router.put("/updateAvatar", auth.protectingRoutes, upload.single('avatar'), userController.updateAvatar);
router.post("/login", auth.loginLimiter, userController.login);
router.post("/forgotPassword", auth.protectingRoutes, userController.forgotPassword);
router.get("/:userId", userController.getUser);
router.get("/", userController.getUsers);

module.exports = router;
