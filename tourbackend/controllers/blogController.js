const blogModel = require('./../models/blogModel');


exports.getBlogHome = async (req, res, next)=>{
    res.send('Blog Home')
}

exports.createblog = async (req, res, next)=>{
    res.send('Create a Blog')
}

exports.getSingleBlog = async (req, res, next)=>{
    res.send('Single Blog')
}

exports.userBlogUpdate = async (req, res, next)=>{
    res.send('Update Blog')
}

exports.deleteUserBlog = async (req, res, next)=>{
    res.send('Delete Blog')
}