const userModel = require('./../models/userModel');

// Getting user profile
exports.getUserProfile = async (req, res, next)=>{
    res.send('User Profile')
}


// Updating user profile 
exports.updateUserProfile = async (req, res, next)=>{
    res.send('User Profile update')
}


// Deleting user's account
exports.userAccountDelete = async (req, res, next)=>{
    res.send('User Account Delete')
}


// Getting tour history


// Getting upcomming tour


