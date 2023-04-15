const express = require('express');
const controller = require('../controller/invoice.controller');
const auth = require('../utils/middleware/auth');

const router = express.Router();
// route for get invoice by id
router.get('/:invoiceId', auth.protectingRoutes, controller.getInvoice);
// get invoice by user id and status pending
router.get('/user/:userId', controller.getInvoiceByUserId);
// route for get all invoices (admin and receptionist only)
router.get('/', auth.protectingRoutes, auth.checkRole(['admin', 'receptionist']), controller.getInvoices);
// route for update the invoice status (admin only)
router.post('/updateStatus/:invoiceId', auth.protectingRoutes, auth.checkRole(['admin']), controller.changeStatus);
// route for update the invoice information (for example, change the payment method)
router.post('/:invoiceId', auth.protectingRoutes, controller.updateInvoice);
// route for create invoice
router.post('/', auth.checkUser, controller.createInvoice);
// route for user to confirm check in (via link attached in email)
router.get('/confirmCheckIn/:code', auth.checkUser, controller.confirmCheckIn);
// route for user to view their invoice
router.get('/view/:option', auth.protectingRoutes, controller.viewInvoice);
// route for checkout
router.put('/checkout/:invoiceId', auth.protectingRoutes, auth.checkRole(['admin', 'receptionist']), controller.checkOut);
// route for checkin
router.put('/checkin/:invoiceId', auth.protectingRoutes, auth.checkRole(['admin', 'receptionist']), controller.checkIn);
module.exports = router;
