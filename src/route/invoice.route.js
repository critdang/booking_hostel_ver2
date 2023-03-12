const express = require('express');
const controller = require('../controller/invoice.controller');
const auth = require('../utils/middleware/auth');

const router = express.Router();
router.get('/id/:invoiceId', auth.protectingRoutes, controller.getInvoice);
// router.get('/', auth.protectingRoutes, controller.getInvoices);
router.get('/', controller.getInvoices);
router.post('/updateStatus/:invoiceId', auth.protectingRoutes, auth.checkRole('admin'), controller.changeStatus);
router.post('/:invoiceId', auth.protectingRoutes, auth.checkRole('admin'), controller.updateInvoice);
router.post('/', auth.checkUser, controller.createInvoice);
router.get('/confirmCheckIn/:code', auth.checkUser, controller.confirmCheckIn);
router.get('/view/:option', auth.protectingRoutes, controller.viewInvoice);

module.exports = router;
