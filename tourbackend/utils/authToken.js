const {promisify} = require('util');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');


// Generating token
exports.signToken = (id)=> {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

// Sending cookie and response after loggin
exports.createSendToken = async (user, statusCode, res) =>{
    const token = this.signToken(user._id);
    let userId = user._id;
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: true
    }

    res.cookie('jwtToken', token, cookieOptions)

    res.json({
        status: 'Success',
        token,
        data: {
            userId
        }
    }) 
}


// Protecting resources from unauthorized access
exports.protectResources = async (req, res, next)=>{

    // 1) Get the token and check if exist
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }
    if(!token){
        return res.status(401).send('You are not looged in, Please login to get access')
    }

    // 2) Verification of the token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    // Password reset and Token theft control
    // 3) Check if user still exist
    const freshUser = await userModel.findById(decoded.id);
    if(!freshUser){
        return res.send('User belonging to token does not exist')
    }

    // 4) Check if user chnaged password after jwt was issued
    if(freshUser.changedPasswordAfter(decoded.iat)){
        console.log('sdh 1')
        return res.status(401).send('User recently changed password!, Please login again.')
    }

    // Grant Access to protected routes
    console.log('sdh 2')
    console.log(freshUser);
    req.user = freshUser
    next();
}