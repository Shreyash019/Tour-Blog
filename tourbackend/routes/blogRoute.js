const express = require('express');
const router = express.Router();
const blogController = require('./../controllers/blogController');
const commentController = require('../controllers/commentController')
const authToken = require('./../utils/authToken');

router.route('/blog').get(blogController.getAllUsersBlogPosted);

router.route('/blog/post').post(authToken.isUserAuthenticated, blogController.createABlogByAuthUser);

router.route('/blog/user').get(authToken.isUserAuthenticated, blogController.getAllBlogCreatedByAuthUser);
router.route('/blog/:id').get(authToken.isUserAuthenticated, blogController.getSingleBlogCreatedByAuthUser);
router.route('/blog/update/:id').put(authToken.isUserAuthenticated, blogController.updateABlogOfAuthUser);
router.route('/blog/delete/:id').delete(authToken.isUserAuthenticated, blogController.deleteUserBlogCreatedByAuthUser);

router.route('/blog/like/:id').get(authToken.isUserAuthenticated, blogController.blogToBeLikeByUser);
router.route('/blog/dislike/:id').get(authToken.isUserAuthenticated, blogController.blogToBeDislikeByUser);

router.route('/blog/comment/:id').get(authToken.isUserAuthenticated, commentController.getAllCommentOnBlog)
router.route('/blog/comment/:id').post(authToken.isUserAuthenticated, commentController.createCommentOnBlog)
router.route('/blog/comment/:id').put( authToken.isUserAuthenticated, commentController.updateCommentOnBlog)
router.route('/blog/comment/:id').delete(authToken.isUserAuthenticated, commentController.deleteCommentOnBlog)


module.exports = router