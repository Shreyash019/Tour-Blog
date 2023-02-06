const mongoose = require('mongoose')

const tourSchema = mongoose.Schema({
    tourName: {
        type: String,     
    },
    tourSummary: {
        type: String,
    },
    tourImg: {
        type: String,
    }, 
    tourDuration: {
        type: String,
    },
    maxGroup: {
        type: Number,
    },
    price: {
        type: Number
    }
})

const tourModel = mongoose.model('tourModel', tourSchema)

module.exports = tourModel;