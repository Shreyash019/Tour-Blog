const TourModel = require('./../models/tourModel');
const ErrorHandler = require('../utils/errorHandler')
const CatchAsync = require('../middleware/catchAsync');
const ApiFeatures = require('../utils/apiFeatures');

// Getting all tours
exports.getAllTours = CatchAsync(async (req, res, next)=>{
    const resultPerPage = 10;

    // Tour count
    const tourCount = await TourModel.countDocuments();

    const apiFeature = new ApiFeatures(TourModel.find(), req.query).search().filter().pagination(resultPerPage);
    const tours = await apiFeature.query;

    if(!tours){
        return next(new ErrorHandler(`Tour doesn't exist`, 500))
    }
    res.status(200).json({
        status: "Success",
        length: tours.length,
        Number_of_Tours: tourCount,
        tours
    })
});

// Getting a tour
exports.getSingleTour = CatchAsync(async (req, res, next)=>{
    const tour = await TourModel.findById(req.params.id)
    
    if(!tour){
        return next(new ErrorHandler(`Tour doesn't exist`, 500))
    }
    res.status(200).json({
        status: "Success",
        data: {
            tour
        }
    })
})

// Creating a tour
exports.createATour = CatchAsync(async (req, res, next)=>{
    req.body.createdByUser= req.user.id

    const tour = await TourModel.create(req.body);

    res.status(200).json({
        status: true,
        tour
    })
})


// Updating a Tour
exports.updateATour = CatchAsync(async (req, res, next)=>{
    const fetchTour = await TourModel.findById(req.params.id)
    if(!fetchTour){
        return next(new ErrorHandler(`Tour doesn't exist`, 500))
    }
    const tour = await TourModel.findByIdAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        status: "Success",
        data: {
            tour
        }
    })
})

// Delete a tour
exports.deleteATour = CatchAsync(async (req, res, next)=>{
    const fetchTour = await TourModel.findById(req.params.id)
    if(!fetchTour){
        return next(new ErrorHandler(`Tour doesn't exist`, 500))
    }
    const tour = await TourModel.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status: "Success",
        data: {
            tour
        }
    })
})


// Get review of tour
exports.getTourReviews = CatchAsync(async (req, res, next)=>{
    const tour = await TourModel.findById(req.query.id);
    if(!tour){
        return next(new ErrorHandler(`Tour not found`, 404))
    }
    res.status(200).json({
        success:true,
        reviews: tour.reviews
    })
})


// Create tour review
exports.createTourReview = CatchAsync(async (req, res, next)=>{
    const {rating, comment, tourId} = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment
    };

    const tour = await TourModel.findById(tourId);

    const isReviewed = tour.reviews.find(rev=> rev.user.toString() === req.user._id.toString())

    if(isReviewed){
        tour.reviews.forEach(rev=> {
            if(rev.user.toString() === req.user._id.toString()){
                rev.rating = rating,
                rev.comment=comment
            }
        })
    } else {
        tour.reviews.push(review);
        tour.numOfReviews = tour.reviews.length;
    }
    let avg = 0;
    tour.reviews.forEach(rev=>{
        avg+= rev.rating
    })
    tour.ratings = avg / tour.reviews.length;

    await tour.save({validateBeforeSave: false})

    res.status(200).json({
        success: true
    })
})

// Delete tour review
exports.deleteTourReview = CatchAsync(async (req, res, next)=>{
    const tour = await TourModel.findById(req.query.tourId);
    if(!tour){
        return next(new ErrorHandler(`Tour not found`, 404))
    }

    const reviews = tour.reviews.filter((rev)=> rev._id.toString() !== req.query.id.toString())

    let avg = 0;

    reviews.forEach(rev=>{
        avg+= rev.rating
    })
    const ratings = avg / reviews.length;

    const numOfReviews = reviews.length

    await TourModel.findByIdAndUpdate(req.query.tourId, {
        reviews,
        ratings,
        numOfReviews,
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false

    })

    await tour.save({validateBeforeSave: false})

    res.status(200).json({
        success:true,
    })
})