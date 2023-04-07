const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    blogSummary: {
        type: String
    },
    blogImg: {
      public_id: {
        type: String,
        required: true
      },
      url: {
          type: String,
          default: "https://deih43ym53wif.cloudfront.net/motorcycle-himalaya-india-shutterstock_1096379993-2_649b7de546.jpeg",
          required: true
      }
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please Author is required"],
    },
    name: {
      type: String,
      required: [true, "Please Author is required"],
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
    createdAt: {
      type: Date,
      default: Date.now
  },
})

const blogModel = mongoose.model('blogModel', blogSchema)

module.exports = blogModel;