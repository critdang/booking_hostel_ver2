const express = require("express");
const controller = require("../controller/guest.controller");
const validate = require('../validate/validate');
const auth = require('../utils/middleware/auth');

const router = express.Router();
router.get("/", controller.getGuests);
router.post("/", validate.handleGuestValidate, controller.createGuest);
// router.put("/:id", auth.protectingRoutes, auth.checkRole('admin'), validate.handleRoomValidate, controller.updateGuest);
router.put("/:id", validate.handleGuestValidate, controller.updateGuest);

// router.post("/:id", auth.protectingRoutes, auth.checkRole('admin'), controller.deleteGuest);
router.post("/:id", controller.deleteGuest);
module.exports = router;
