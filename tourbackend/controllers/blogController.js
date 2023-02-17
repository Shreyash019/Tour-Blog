const blogModel = require('./../models/blogModel');
const userModel = require('./../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const CatchAsync = require('../middleware/catchAsync');


// All users Blog(Blog Timeline)
exports.getAllUsersBlogPosted = CatchAsync(async(req, res, next)=>{
    let blogs = await blogModel.find().sort("-createdAt")
        if(!blogs){
            return next(new ErrorHandler(`Something went wrong.`, 404));
        }
        res.json({
            status: true,
            totalBlogs: blogs.length,
            blogs
        });
})


// Getting blog created by a user
exports.getAllBlogCreatedByAuthUser = CatchAsync(async(req, res, next)=>{
        const blogsCreatedByUser = await blogModel.find({author: req.user.id});
        if(!blogsCreatedByUser){
            return next(new ErrorHandler(`Something went wrong.`, 404));
        }
        res.status(201).json({
            status: 'Success',
            length: blogsCreatedByUser.length,
            data: {
                blogsCreatedByUser
            }
        });
})


// Getting user single blog
exports.getSingleBlogCreatedByAuthUser = CatchAsync(async (req, res, next)=>{
    let userId = req.user.id;
    let blogId = req.params.id;
    
    const blog = await blogModel.findById({_id: blogId});
        
    if(!blog){
        return next(new ErrorHandler(`Something went wrong.`, 404));
    }

    res.json({
        status: 'Success',
        data: {
            blog
        }
    })
})


// Create a blog
exports.createABlogByAuthUser = CatchAsync(async (req, res, next)=>{
    console.log(req.user.id)
    console.log(req.body)
    req.body.author = req.user.id;
    req.body.name = req.user.name
    // req.body.authorName = req.user.name
    const blogger = await userModel.findById(req.user.id);
    console.log(blogger)
    const blog = await blogModel.create(req.body);
    blogger.blogs.push(blog);
    await blogger.save();
    res.json({
        status: 'Success',
        data: {
            blog
        }
    })
})

// Updating user blog
exports.updateABlogOfAuthUser = CatchAsync(async (req, res, next)=>{
    let blogId = req.params.id;
    const blogexist = await blogModel.findOne({_id: blogId, author: req.user.id});
    if(!blogexist){
        return next(new ErrorHandler(`You are not authorized to update it.`, 404));
    }

    const blog = await blogModel.findByIdAndUpdate({_id: blogId}, req.body, {
        new : true,
        runValidators: true
    });
    res.json({
        status: 'Success',
        data: {
            blog
        }
    })
})


// Deleting User Blog
exports.deleteUserBlogCreatedByAuthUser = CatchAsync(async (req, res, next)=>{
    let userId = req.user.id;
    let blogId = req.params.id;

    const blogd = await blogModel.findOne({_id: blogId, author: userId});
    if(!blogd){
        return next(new ErrorHandler(`You are not authorized to delete it.`, 404));
    }
    const blog = await blogModel.findByIdAndDelete({_id: blogId});

    res.json({
        status: 'Success',
        data: {
            blog
        }
    })
})



// Like a blog
exports.blogToBeLikeByUser = CatchAsync(async (req, res, next)=> {

    let blogId = req.params.id;

    const blog = await blogModel.findById(blogId);
    if(!blog){
        return next(new ErrorHandler(`Something went wrong.`, 404));
    }
    const checkLiked = blog.likes.includes(req.user.id);
    const checkDisliked = blog.dislikes.includes(req.user.id);
    if(checkDisliked){
        blog.dislikes.remove(req.user.id);
        blog.likes.push(req.user.id);
        await blog.save();
    }

    else if(checkLiked){
        blog.likes.remove(req.user.id);
        await blog.save();
    } 
    else {
        blog.likes.push(req.user.id);
        await blog.save();
    }
    res.status(200).json({
        status: 'Success',
        data: blog
    });
})


// Dislike a blog
exports.blogToBeDislikeByUser = CatchAsync(async (req, res, next)=> {
    let blogId = req.params.id;

    const blog = await blogModel.findById(blogId);
    if(!blog){
        return next(new ErrorHandler(`Something went wrong.`, 404));
    }
    const checkLiked = blog.likes.includes(req.user.id);
    const checkDisliked = blog.dislikes.includes(req.user.id);
    if(checkLiked){
        blog.likes.remove(req.user.id);
        blog.dislikes.push(req.user.id);
        await blog.save();
    }
    else if(checkDisliked){
        blog.dislikes.remove(req.user.id);
        await blog.save();
    } 
    else {
        blog.dislikes.push(req.user.id);
        await blog.save();
    }
    res.status(200).json({
        status: 'Success',
        data: blog
    });
})

exports.getUserNameOftheBlog = CatchAsync(async(req, res, next)=>{
    console.log(req.params.userId)
    let name = await userModel.findById(req.params.userId)
    if(!name){
        return next(new ErrorHandler(`Something went wrong.`, 404));
    }
    console.log(name.name)
    res.status(200).json({
        status: 'Success',
        name: user.name
    });
})