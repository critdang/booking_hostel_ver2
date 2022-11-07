const express = require('express');
const controller = require('../controller/order.controller');

const router = express.Router();
router.get('/:orderId', controller.getOrder);
router.get('/', controller.getOrders);
router.get('/', controller.getOrders);
router.post('/updateStatus/:orderId', controller.changeStatus);
router.post('/:orderId', controller.updateOrder);

module.exports = router;
