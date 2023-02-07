const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name.'],
    },
    email: {
        type: String,
        required: [true, 'Please provide email address.'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password.'],
        select: false,
    },
    bio: {
        type: String,
    },
    address: {
        type: String,
    },
    profileImage: {
        public_id: {
            type: String,
            // required: true
        },
        url: {
            type: String,
            // required: true
        }
    },
    role: {
        type: String,
        default: 'user',

    },
    admin: {
        type: String,
        default: 'user',

    },
    passwordChangedAt: {
        type: Date
    },
    blogs: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Post",
        },
    ],
    comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment",
        },
    ],
    resetPasswordToken: String,
    resetPasswordExpire: Date,
})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

userSchema.methods.correctPassword = async function (candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword, userPassword)
}

// Generating Password reset token
userSchema.methods.getResetPasswordToken = function(){
    // Generating token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // hashing and add to user schema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now()+ 15 *60*1000;

    return resetToken;
}

const userModel = mongoose.model('userModel', userSchema)

module.exports = userModel;