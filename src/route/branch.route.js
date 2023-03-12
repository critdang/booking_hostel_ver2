const express = require("express");
const controller = require("../controller/branch.controller");
const validate = require('../validate/validate');

const router = express.Router();
router.post('/', validate.handleBranchValidate, controller.createBranch);
router.get("/", controller.getBranches);
router.get('/:id', controller.getBranch);
router.put('/:id', controller.updateBranch);

module.exports = router;
