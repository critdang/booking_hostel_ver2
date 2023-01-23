const express = require('express');
const controller = require('../controller/order.controller');
const auth = require('../utils/middleware/auth');

const router = express.Router();
router.get('/id/:orderId', auth.protectingRoutes, controller.getOrder);
router.get('/', auth.protectingRoutes, controller.getOrders);
router.post('/updateStatus/:orderId', auth.protectingRoutes, auth.checkRole('admin'), controller.changeStatus);
router.post('/:orderId', auth.protectingRoutes, auth.checkRole('admin'), controller.updateOrder);
router.post('/', auth.checkUser, controller.createOrder);
router.get('/confirmCheckIn/:code', auth.checkUser, controller.confirmCheckIn);
router.get('/view/:option', auth.protectingRoutes, controller.viewOrder);

module.exports = router;
