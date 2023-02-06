const express = require('express');
const router = express.Router();
const blogController = require('./../controllers/blogController');
const commentController = require('../controllers/commentController')
const authToken = require('./../utils/authToken');

router.route('/').get(blogController.getBlogHome);
router.route('/createblog').post(blogController.createblog);

router.route('/userblogs').get(blogController.getAllBlogCreatedByUser);
router.route('/userblog/:id').get(blogController.getSingleBlog);
router.route('/userblogupdate/:id').patch(blogController.userBlogUpdate);
router.route('/userblogdelete/:id').delete(blogController.deleteUserBlog);

router.route('/userbloglike/:id').delete(blogController.blogToBeLikedByUser);

router.route('/createblogcomment/:id').post(commentController.createCommentOnBlog)
router.route('/updateblogcomment/:id').post(commentController.updateCommentOnBlog)
router.route('/deleteblogcomment/:id').post(commentController.deleteCommentOnBlog)


module.exports = router