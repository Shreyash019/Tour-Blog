const userModel = require('./../models/userModel');

// Getting user profile
exports.getUserProfile = async (req, res, next)=>{
    let userId = req.user._id;
    let userIdToVerify = req.params.id;
    let userProfile;
    if(userId.toString()==userIdToVerify.toString()){
        userProfile = await userModel.findById({_id: userId})
    }
    else {
        return res.send('You are not logged in, Please login again.')
    }

    res.json({
        status: 'Success',
        data: {
            userProfile
        }
    })
}


// Updating user profile 
exports.updateUserProfile = async (req, res, next)=>{
    let userId = req.user._id;
    let userIdToVerify = req.params.id;
    let userProfile;
    if(userId.toString()==userIdToVerify.toString()){
        userProfile = await userModel.findByIdAndUpdate({_id: userId}, req.body, {
            new : true,
            runValidators: true
        })
    }
    else {
        return res.send('You are not logged in, Please login again.')
    }

    res.json({
        status: 'Success',
        data: {
            userProfile
        }
    })
}


// Deleting user's account
exports.userAccountDelete = async (req, res, next)=>{
    let userId = req.user._id;
    let userIdToVerify = req.params.id;
    let userProfile;
    if(userId.toString()==userIdToVerify.toString()){
        userProfile = await userModel.findById({_id: userId})
    }
    else {
        res.send('You are not logged in, Please login again.')
    }
    if(!userProfile){
        return res.send(`User doesn't exist.`)
    }
    req.user._id = undefined;
    const deleteUserProfile = await userModel.findByIdAndDelete(userId);
    res.json({
        status: 'Success',
        data: {
            deleteUserProfile
        }
    })
}


// Getting tour history


// Getting upcomming tour


