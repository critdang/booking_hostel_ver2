const express = require("express");
const controller = require("../controller/branch.controller");
const validate = require('../validate/validate');
const auth = require('../utils/middleware/auth');

const router = express.Router();
router.post('/', auth.protectingRoutes, auth.checkRole(['admin']), validate.handleBranchValidate, controller.createBranch);
router.get("/", controller.getBranches);
router.get('/:id', controller.getBranch);
router.put('/:id', auth.protectingRoutes, auth.checkRole(['admin']), controller.updateBranch);

module.exports = router;
