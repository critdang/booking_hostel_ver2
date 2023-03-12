const express = require("express");
const controller = require("../controller/guest.controller");
const validate = require('../validate/validate');
const auth = require('../utils/middleware/auth');

const router = express.Router();
// route display all guest
router.get("/", auth.protectingRoutes, auth.checkRole(['admin', 'receptionist']), controller.getGuests);
// route display guest by id
router.get("/:id", auth.protectingRoutes, auth.checkRole(['admin', 'receptionist']), controller.getGuest);
// route used for create new guest
router.post("/", auth.protectingRoutes, auth.checkRole(['admin', 'receptionist']), validate.handleGuestValidate, controller.createGuest);
// route used for update guest
router.put("/:id", auth.protectingRoutes, auth.checkRole(['admin', 'receptionist']), validate.handleGuestValidate, controller.updateGuest);
// route used for delete guest
router.delete("/:id", auth.protectingRoutes, auth.checkRole(['admin', 'receptionist']), controller.deleteGuest);
router.get("/", controller.getGuests);
router.post("/", validate.handleGuestValidate, controller.createGuest);
// router.put("/:id", auth.protectingRoutes, auth.checkRole('admin'), validate.handleRoomValidate, controller.updateGuest);
router.put("/:id", validate.handleGuestValidate, controller.updateGuest);

module.exports = router;
