const userModel = require('../models/userModel');
const blogModel = require('../models/blogModel');
const commentModel = require('../models/commentModel');
const ErrorHandler = require('../utils/errorHandler');
const CatchAsync = require('../middleware/catchAsync');



// Get comment
exports.getAllCommentOnBlog = CatchAsync(async (req, res, next)=>{

    const blog = await blogModel.findOne({_id: req.params.id});
    if(!blog){
        return next(new ErrorHandler(`Blog doesn't exist.`, 404));
    }
    res.status(201).json({
        status: 'Success',
        data: blog,
    })
})



// Comment on a blog
exports.createCommentOnBlog = CatchAsync(async (req, res, next)=>{
    const {description} = req.body;
        const blog = await blogModel.findOne({_id: req.params.id, authorUser: req.user.id});
        const user = await userModel.findById(req.user.id);
        if(!blog || !user){
            return next(new ErrorHandler(`Something went wrong.`, 404));
        }
        const comment = await commentModel.create({
            blog: req.params.id,
            user: req.user.id,
            description
        });
        blog.comments.push(comment);
        user.comments.push(comment)
        await blog.save({ validateBeforeSave: false });
        await user.save({ validateBeforeSave: false });

        res.status(201).json({
            status: 'Success',
            data: comment,
            blog,
            user
        })
})

// Update a comment
exports.updateCommentOnBlog = CatchAsync(async (req, res, next)=>{
    try{
        res.status(200).send('Welcome to comment update');
    } catch(err){
        res.status(400).send(error)
    } 
})




// Delete a comment
exports.deleteCommentOnBlog = CatchAsync(async (req, res, next)=>{
    try{
        res.status(200).send('Welcome to comment delete');
    } catch(err){
        res.status(400).send(error)
    } 
})