// eslint-disable-next-line import/no-extraneous-dependencies
const express = require("express");
const controller = require("../controller/control.controller");

const router = express.Router();
const validate = require("../validate/validate");
const { upload } = require("../utils/uploadImg");

router.get("/lang/:lang", controller.changeLanguage);
router.post("/login", validate.handleLoginValidate, controller.handleLogin);
router.get("/logout", controller.handleLogout);
router.get("/display-all-users", controller.displayUsers);
router.get("/update-user", controller.updateUser);
router.get("/delete-user", controller.deleteUser);
router.post("/create-user", upload.single("image"), controller.createUser);
router.post("/handle-update-user", controller.handleUpdateUser);
router.get("/confirmation/:token", controller.confirmRegister);
router.get("/signup", (req, res) => {
  res.render("login/signup");
});
module.exports = router;
