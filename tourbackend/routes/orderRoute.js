const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authToken  = require('../utils/authToken');

router.route('/order/new').post(authToken.isAuthenticateUser, orderController.newOrder);
router.route('/order/:id').get(authToken.isAuthenticateUser, orderController.getSingleOrder);
router.route('/orders').get(authToken.isAuthenticateUser, orderController.getMyOrders)

router.route('/guide/orders').get(authToken.isAuthenticateUser, authToken.isUserGuide("guide"), orderController.getAllOrdersByGuide);

router.route('/guide/orders/:id')
    .put(authToken.isAuthenticateUser, authToken.isUserGuide("guide"), orderController.updateOrderStatusByGuide)
    .delete(authToken.isAuthenticateUser, authToken.isUserGuide("guide"), orderController.deleteOrderByGuide)

module.exports = router;