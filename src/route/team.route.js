const express = require("express");

const router = express.Router();
const teamController = require('../controller/team.controller');
const auth = require('../utils/middleware/auth');

router.delete('/user/:id', auth.protectingRoutes, auth.checkRole('admin'), teamController.deleteUser);
module.exports = router;
