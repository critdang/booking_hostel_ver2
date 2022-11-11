const express = require('express');
const controller = require('../controller/cart.controller');
const auth = require('../utils/middleware/auth');

const router = express.Router();
// router.get('/', controller.cartPage);
router.post('/', auth.protectingRoutes1, controller.addToCart);
router.get('/', auth.protectingRoutes1, controller.getItemInCart);
router.delete('/:roomId', auth.protectingRoutes1, controller.removeItemFromCart);
module.exports = router;
