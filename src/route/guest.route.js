const express = require("express");
const controller = require("../controller/guest.controller");

const router = express.Router();
router.get("/", controller.getGuests);
module.exports = router;
