const express = require('express');
const controller = require('../controller/cart.controller');
const auth = require('../utils/middleware/auth');

const router = express.Router();
// router.get('/', controller.cartPage);
router.post('/checkout', controller.checkout);
router.post('/addToCart' , auth.protectingRoutes, controller.addToCart);
router.get('/', auth.protectingRoutes, controller.getItemInCart);
router.delete('/:cartId/room/:roomId', auth.protectingRoutes, controller.removeItemFromCart);
module.exports = router;
