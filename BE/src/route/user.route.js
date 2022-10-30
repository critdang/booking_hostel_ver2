const express = require('express');
const { userPage } = require('../controller/user.controller');

const router = express.Router();
router.get('/', userPage);

module.exports = router;
