const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authenToken  = require('../utils/authToken');

router.route('/order/new').post(authenToken.isAuthenticateUser, orderController.newOrder);
router.route('/order/:id').get(authenToken.isAuthenticateUser, orderController.getSingleOrder);
router.route('/orders').get(authenToken.isAuthenticateUser, orderController.getMyOrders)

router.route('/guide/orders').get(authenToken.isAuthenticateUser, authenToken.isUserGuide("guide"), orderController.getAllOrdersByGuide);

router.route('/guide/orders/:id')
    .put(authenToken.isAuthenticateUser, authenToken.isUserGuide("guide"), orderController.updateOrderStatusByGuide)
    .delete(authenToken.isAuthenticateUser, authenToken.isUserGuide("guide"), orderController.deleteOrderByGuide)

module.exports = router;