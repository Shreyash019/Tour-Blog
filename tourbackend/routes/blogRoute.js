const express = require('express');
const router = express.Router();
const blogController = require('./../controllers/blogController');
const commentController = require('../controllers/commentController')
const authToken = require('./../utils/authToken');

router.route('/').get(authToken.protectResources, blogController.getBlogHome);
router.route('/createblog').post(authToken.protectResources, blogController.createblog);

router.route('/userblogs').get(authToken.protectResources, blogController.getAllBlogCreatedByUser);
router.route('/userblog/:id').get(authToken.protectResources, blogController.getSingleBlog);
router.route('/userblogupdate/:id').patch(authToken.protectResources, blogController.userBlogUpdate);
router.route('/userblogdelete/:id').delete(authToken.protectResources, blogController.deleteUserBlog);

router.route('/userbloglike/:id').delete(authToken.protectResources, blogController.blogToBeLikedByUser);

router.route('/createblogcomment/:id').post(authToken.protectResources, commentController.createCommentOnBlog)
router.route('/updateblogcomment/:id').post(authToken.protectResources, commentController.updateCommentOnBlog)
router.route('/deleteblogcomment/:id').post(authToken.protectResources, commentController.deleteCommentOnBlog)


module.exports = router