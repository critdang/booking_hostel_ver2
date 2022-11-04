const express = require('express');
const controller = require('../controller/order.controller');

const router = express.Router();
router.get('/', controller.orderPage);
router.get('/:orderId', controller.orderDetail);

module.exports = router;
