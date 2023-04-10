const express = require("express");
const controller = require("../controller/guest.controller");
const validate = require('../validate/validate');
const auth = require('../utils/middleware/auth');

const router = express.Router();
router.get("/", auth.protectingRoutes, auth.checkRole(['admin', 'receptionist']), controller.getGuests);
router.get("/:id", auth.protectingRoutes, auth.checkRole(['admin', 'receptionist']), controller.getGuest);
router.post("/", auth.protectingRoutes, auth.checkRole(['admin', 'receptionist']), validate.handleGuestValidate, controller.createGuest);
router.put("/:id", auth.protectingRoutes, auth.checkRole(['admin', 'receptionist']), controller.updateGuest);
router.delete("/:id", auth.protectingRoutes, auth.checkRole(['admin', 'receptionist']), controller.deleteGuest);

module.exports = router;
