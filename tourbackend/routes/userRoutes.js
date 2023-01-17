const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');
const authControler = require('./../controllers/authController');

router.route('/signin').post(authControler.userSignIn)
router.route('/signup').post(authControler.userSignUp)
router.route('/userpassword/:id').patch(authControler.userPasswordUpdate)

router.route('/:id')
    .get(userController.getUserProfile)
    .patch(userController.updateUserProfile)
    .delete(userController.userAccountDelete)


module.exports = router