const blogModel = require('./../models/blogModel');
const userModel = require('./../models/userModel');


// All users Blog(Blog Timeline)
exports.getBlogHome = async (req, res, next)=>{
    const allBlogs = await blogModel.find()
    res.json({
        status: 'Success',
        length: allBlogs.length,
        data: {
            allBlogs
        }
    })
}


// Getting blog created by a user
exports.getAllBlogCreatedByUser = async (req, res, next)=>{
    let userId = req.user._id;
    console.log(userId)
    const blogsCreatedByUser = await blogModel.find({authorUser: userId});
    
    res.status(201).json({
        status: 'Success',
        length: blogsCreatedByUser.length,
        data: {
            blogsCreatedByUser
        }
    });
}


// Getting user single blog
exports.getSingleBlog = async (req, res, next)=>{
    let userId = req.user._id;
    let blogId = req.params.id;
    const singleBlog = await blogModel.findById({_id: blogId, authorUser: userId});
    if(!singleBlog){
        return res.send(`Blog doesn't exist.`)
    }
    res.json({
        status: 'Success',
        data: {
            singleBlog
        }
    })
}


// Create a blog
exports.createblog = async (req, res, next)=>{
    const blogger = await userModel.findById(req.user._id)
    req.body.authorUser = blogger._id;
    const createBlog = await blogModel.create(req.body);
    blogger.blogs.push(createBlog);
    await blogger.save();
    res.json({
        status: 'Success',
        data: {
            createBlog
        }
    })
}

// Updating user blog
exports.userBlogUpdate = async (req, res, next)=>{
    let userId = req.user._id;
    let blogId = req.params.id;

    const blogexist = await blogModel.findById({_id: blogId, authorUser: userId});
    if(!blogexist){
        return res.send(`Blog doesn't exist.`)
    }

    const updateBlog = await blogModel.findByIdAndUpdate({_id: blogId}, req.body, {
        new : true,
        runValidators: true
    });
    res.json({
        status: 'Success',
        data: {
            updateBlog
        }
    })
}


// Deleting User Blog
exports.deleteUserBlog = async (req, res, next)=>{
    let userId = req.user._id;
    let blogId = req.params.id;

    const blogexist = await blogModel.findById({_id: blogId, authorUser: userId});
    if(!blogexist){
        return res.send(`Blog doesn't exist.`)
    }
    const deletedBlog = await blogModel.findByIdAndDelete({_id: blogId});

    res.json({
        status: 'Success',
        data: {
            deletedBlog
        }
    })
}