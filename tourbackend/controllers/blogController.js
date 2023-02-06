const blogModel = require('./../models/blogModel');
const userModel = require('./../models/userModel');


// All users Blog(Blog Timeline)
exports.getBlogHome = async (req, res, next)=>{
    try{
        const allBlogs = await blogModel.find()
        res.json({
            status: 'Success',
            length: allBlogs.length,
            data: {
                allBlogs
            }
        })
    } catch(err){
        console.log(err);
        res.send('Some error happened.')
    }
}


// Getting blog created by a user
exports.getAllBlogCreatedByUser = async (req, res, next)=>{
    let userId = req.user._id;
    console.log(userId)
    try{
        const blogsCreatedByUser = await blogModel.find({authorUser: userId});
        
        res.status(201).json({
            status: 'Success',
            length: blogsCreatedByUser.length,
            data: {
                blogsCreatedByUser
            }
        });
    } catch(err){
        console.log(err);
        res.send('Some error happened.')
    }
}


// Getting user single blog
exports.getSingleBlog = async (req, res, next)=>{
    let userId = req.user._id;
    let blogId = req.params.id;
    try{
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
    } catch(err){
        console.log(err);
        res.send('Some error happened.')
    }
}


// Create a blog
exports.createblog = async (req, res, next)=>{
    try{
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
    } catch(err){
        console.log(err);
        res.send('Some error happened.')
    }
}

// Updating user blog
exports.userBlogUpdate = async (req, res, next)=>{
    let userId = req.user._id;
    let blogId = req.params.id;

    try{
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
    } catch(err){
        console.log(err);
        res.send('Some error happened.')
    }
}


// Deleting User Blog
exports.deleteUserBlog = async (req, res, next)=>{
    let userId = req.user._id;
    let blogId = req.params.id;

    try{
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
    } catch(err){
        console.log(err);
        res.send('Some error happened.')
    }
}



// Like a blog
exports.blogToBeLikedByUser = async (req, res, next)=> {
    let checkIfAlreadyLiked;
    let blogId = req.params.id;
    let userId = req.user._id;

    try{
        const blogToLike = await blogModel.findById(blogId);
        checkIfAlreadyLiked = blogToLike.likes.includes(userId);
        if(checkIfAlreadyLiked){
            blogToLike.likes = blogToLike.filter(like => like.toString()!==userId.toString())
            await blogId.save();
        } else {
            blogToLike.likes.push(userId);
            await blogToLike.save();
        }
        res.status(200).json({
            status: 'Success',
            data: blogToLike
        });
    } catch(err){
        console.log(err);
        res.send('Some error happened.')
    }
}