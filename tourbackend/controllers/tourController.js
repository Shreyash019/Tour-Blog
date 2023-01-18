const tourModel = require('./../models/tourModel');

// Getting to tour booking Home
exports.gettourHome = async (req, res, next)=>{
    res.send('User Profile')
}


// Getting all tours available for booking
exports.getAllTour = async (req, res, next)=>{
    res.send('All Tour')
}


// Getting a single tour details
exports.getSingleTour = async (req, res, next)=>{
    res.send('Single Tour')
}


// Giving rating to a tour after completion


// Giving review on a tour after completion