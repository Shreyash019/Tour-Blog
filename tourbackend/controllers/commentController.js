const userModel = require('../models/userModel');
const blogModel = require('../models/blogModel');
const commentModel = require('../models/commentModel');


// Comment on a blog
exports.createCommentOnBlog = async (req, res, next)=>{
    const {description} = req.body;
    let userId = req.user._id;
    let blogId = req.params.id;
    console.log('headers:: ',id, user)
    const commentToBlog = await blogModel.findById({_id: blogId, authorUser: userId});
    const commentByUser = await userModel.findById(userId);
    const userComment = await commentModel.create({
        blog: blogId,
        commentByUser: userId,
        description
    });
    await commentToBlog.save({ validateBeforeSave: false });
    await commentByUser.save({ validateBeforeSave: false });

    res.status(201).json({
        status: 'Success',
        data: userComment
    })
}

// Update a comment
exports.updateCommentOnBlog = async (req, res, next)=>{
    try{
        res.status(200).send('Welcome to comment update');
    } catch(err){
        res.status(400).send(error)
    } 
}

// Delete a comment
exports.deleteCommentOnBlog = async (req, res, next)=>{
    try{
        res.status(200).send('Welcome to comment delete');
    } catch(err){
        res.status(400).send(error)
    } 
}