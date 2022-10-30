const express = require('express');
const controller = require('../controller/cart.controller');

const router = express.Router();
router.get('/', controller.cartPage);
router.post('/checkout', controller.checkout);

module.exports = router;
