const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authToken  = require('../utils/authToken');

router.route('/order/new').post(authToken.isUserAuthenticated, orderController.newOrder);
router.route('/order/:id').get(authToken.isUserAuthenticated, orderController.getSingleOrder);
router.route('/orders').get(authToken.isUserAuthenticated, orderController.getMyOrders)

router.route('/guide/orders').get(authToken.isUserAuthenticated, authToken.isUserGuide("guide"), orderController.getAllOrdersByGuide);

router.route('/guide/order/:id')
    .put(authToken.isUserAuthenticated, authToken.isUserGuide("guide"), orderController.updateOrderStatusByGuide)
    .delete(authToken.isUserAuthenticated, authToken.isUserGuide("guide"), orderController.deleteOrderByGuide)

module.exports = router;