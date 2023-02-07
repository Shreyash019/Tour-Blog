const express = require('express');
const router = express.Router();
const tourController = require('./../controllers/tourController');
const authToken = require('./../utils/authToken');

router.route('/tours').get(tourController.getAllTours);
router.route('/tour/new').get(authToken.isUserAuthenticated, authToken.isUserGuide("guide"), tourController.createATour);
router.route('/tour/:id')
    .get(tourController.getSingleTour)
    .put(authToken.isUserAuthenticated, authToken.isUserGuide("guide"), tourController.getSingleTour)
    .delete(authToken.isUserAuthenticated, authToken.isUserGuide("guide"), tourController.deleteATour)

router.route('/tour/review')
    .get(tourController.getTourReview)
    .put(authToken.isUserAuthenticated, tourController.createTourReview)
    .delete(authToken.isUserAuthenticated, tourController.deleteTourReview)

module.exports = router