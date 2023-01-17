const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

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
    profilePhoto:{
        type: String,
    },
})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

userSchema.methods.correctPassword = async function (candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword, userPassword)
}

const userModel = mongoose.model('userModel', userSchema)

module.exports = userModel;