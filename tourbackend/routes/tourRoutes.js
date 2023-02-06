const express = require('express');
const router = express.Router();
const tourController = require('./../controllers/tourController');
const authToken = require('./../utils/authToken');

router.route('/').get(tourController.gettourHome);
router.route('/alltour').get( tourController.getAllTour);
router.route('/singletour/:id').get( tourController.getSingleTour);


module.exports = router