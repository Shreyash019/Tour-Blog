const express = require('express');
const router = express.Router();
const tourController = require('./../controllers/tourController');
const authToken = require('./../utils/authToken');

router.route('/').get(tourController.gettourHome);
router.route('/alltour').get(authToken.protectResources, tourController.getAllTour);
router.route('/singletour/:id').get(authToken.protectResources, tourController.getSingleTour);


module.exports = router