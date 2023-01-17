const userModel = require('./../models/userModel');
const authToken = require('../utils/authToken')


exports.userSignUp = async (req, res, next)=>{
    const {name, email, password, confirmPassword} = req.body;
    if(!name || !email || !password || !confirmPassword){
        return res.send('Please provide correct details in all field.');
    }
    if(!(password === confirmPassword)){
        return res.send(`Password and Confirm Password doesn't matches.`)
    }
    const existingUser = await userModel.findOne({email});
    if(existingUser){
        return res.send('User already exist')
    }
    const newUser = await userModel.create({
        name,
        email,
        password
    })
    const token = authToken.signToken(newUser._id)
    res.json({
        status: 'Success',
        token,
        data: {
            newUser
        }
    })
}

exports.userSignIn = async (req, res, next)=>{
    const {email, password} = req.body;
    let existingUser;
    if(!email || !password){
        return res.send('Please provide email and password.');
    }
    existingUser = await userModel.findOne({email}).select('+password');
    if(!existingUser || !await existingUser.correctPassword(password, existingUser.password)){
        return res.send(`User doesn't exist`)
    }
    authToken.createSendToken(existingUser, 200, res)
    // res.json({
    //     status: 'Success',
    //     data: {
    //         existingUser
    //     }
    // })    
}

exports.userPasswordUpdate = async (req, res, next)=>{
    res.send('User Password Update')
}
