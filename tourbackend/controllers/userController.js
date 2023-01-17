const userModel = require('./../models/userModel');


exports.getUserProfile = async (req, res, next)=>{
    res.send('User Profile')
}

exports.updateUserProfile = async (req, res, next)=>{
    res.send('User Profile update')
}


exports.userAccountDelete = async (req, res, next)=>{
    res.send('User Account Delete')
}

