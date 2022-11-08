const express = require('express');
const controller = require('../controller/cart.controller');
const auth = require('../utils/middleware/auth');

const router = express.Router();
// router.get('/', controller.cartPage);
router.post('/checkout', controller.checkout);
router.post('/addToCart', controller.addToCart);
router.get('/', auth.protectingRoutes, controller.getCart);
module.exports = router;
