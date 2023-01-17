const jwt = require('jsonwebtoken');

exports.signToken = (id)=> {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

exports.createSendToken = (user, statusCode, res) =>{
    const token = this.signToken(user._id);

    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: true
    }

    res.cookie('jwtToken', token, cookieOptions)

    res.json({
        status: 'Success',
        token,
        data: {
            user
        }
    }) 
}

