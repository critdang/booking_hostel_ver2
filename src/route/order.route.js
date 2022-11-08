const express = require('express');
const controller = require('../controller/order.controller');
const auth = require('../utils/middleware/auth');

const router = express.Router();
router.get('/:orderId', auth.protectingRoutes, controller.getOrder);
router.get('/', auth.protectingRoutes, controller.getOrders);
router.post('/updateStatus/:orderId', auth.protectingRoutes, auth.checkRole('admin'), controller.changeStatus);
router.post('/:orderId', auth.protectingRoutes, auth.checkRole('admin'), controller.updateOrder);

module.exports = router;
