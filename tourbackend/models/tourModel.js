const mongoose = require('mongoose')

const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter tour name."]   
    },
    description: {
        type: String,
        required: [true, 'Please provide tour summary.']
    },
    startDate:{
        type: Date,
        required: [true, 'Please provide tour start date.']
    },
    endDate: {
        type: Date,
        required: [true, 'Please provide tour end date.']
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                default: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                required: true
            }
        }
    ],
    duration: {
        type: String,
        required: [true, 'Please provide tour duration.']
    },
    maxGroup: {
        type: Number,
        required: [true, 'Please enter tour Price'],
        maxLength: [3, 'Group size cannot exceed 3 charcters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter tour Price'],
        maxLength: [8, 'Price cannot exceed 8 charcters']
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user:{
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdByUser:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const tourModel = mongoose.model('tourModel', tourSchema)

module.exports = tourModel;