const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    blogSummary: {
        type: String
    },
    blogImg: {
        type: String
    }
})

const blogModel = mongoose.model('blogModel', blogSchema)

module.exports = blogModel;