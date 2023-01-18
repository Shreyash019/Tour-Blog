const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');
const authControler = require('./../controllers/authController');
const authToken = require('./../utils/authToken');

router.route('/signin').post(authControler.userSignIn)
router.route('/signup').post(authControler.userSignUp)
router.route('/userpassword/:id').patch(authControler.userPasswordUpdate)

router.route('/:id')
    .get(authToken.protectResources, userController.getUserProfile)
    .patch(authToken.protectResources, userController.updateUserProfile)
    .delete(authToken.protectResources, userController.userAccountDelete)


module.exports = router