const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    blogSummary: {
        type: String
    },
    blogImg: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Author is required"],
    },
    comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment",
        },
    ],
    likes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Likes",
        },
    ],
    dislikes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Likes",
        },
    ],
    numViews: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "NumViews",
        },
    ],
})

const blogModel = mongoose.model('blogModel', blogSchema)

module.exports = blogModel;