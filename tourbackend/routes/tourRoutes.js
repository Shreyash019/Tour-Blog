const express = require('express');
const router = express.Router();
const tourController = require('./../controllers/tourController');
const authToken = require('./../utils/authToken');

router.route('/tours').get(tourController.getAllTours);
router.route('/tour/new').get(authToken.isUserAuthenticated, authenToken.isUserGuide("guide"), tourController.createATour);
router.route('/tour/:id')
    .get(tourController.getAllTour)
    .put(authToken.isUserAuthenticated, authenToken.isUserGuide("guide"), tourController.getSingleTour)
    .delete(authToken.isUserAuthenticated, authenToken.isUserGuide("guide"), tourController.deleteATour)

router.route('/tour/review')
    .get(tourController.getTourReview)
    .put(authToken.isUserAuthenticated, tourController.createTourReview)
    .delete(authToken.isUserAuthenticated, tourController.deleteTourReview)

module.exports = router