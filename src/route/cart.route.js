const express = require('express');
const cartController = require('../controller/cart.controller');

const router = express.Router();
router.get('/', cartController.cartPage);
router.post('/checkout', cartController.checkout);
router.post('/addToCart', cartController.addToCart);
module.exports = router;
