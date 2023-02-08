const express = require('express');
const router = express.Router();
const tourController = require('./../controllers/tourController');
const authToken = require('./../utils/authToken');

router.route('/tours').get(tourController.getAllTours);
router.route('/tour/new').post(authToken.isUserAuthenticated, authToken.isUserGuide("guide"), tourController.createATour);
router.route('/tour/:id')
    .get(tourController.getSingleTour)
    .put(authToken.isUserAuthenticated, authToken.isUserGuide("guide"), tourController.updateATour)
    .delete(authToken.isUserAuthenticated, authToken.isUserGuide("guide"), tourController.deleteATour)

router.route('/tour/review')
    .get(tourController.getTourReviews)
    .put(authToken.isUserAuthenticated, tourController.createTourReview)
    .delete(authToken.isUserAuthenticated, tourController.deleteTourReview)

module.exports = router