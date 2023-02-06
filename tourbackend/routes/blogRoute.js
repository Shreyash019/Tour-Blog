const express = require('express');
const router = express.Router();
const blogController = require('./../controllers/blogController');
const commentController = require('../controllers/commentController')
const authToken = require('./../utils/authToken');

router.route('/').get(blogController.getAllUsersBlogPosted);

router.route('/post').post(authToken.isUserAuthenticated, blogController.createABlogByAuthUser);

router.route('/user').get(authToken.isUserAuthenticated, blogController.getAllBlogCreatedByAuthUser);
router.route('/:id').get(authToken.isUserAuthenticated, blogController.getSingleBlogCreatedByAuthUser);
router.route('/update/:id').put(authToken.isUserAuthenticated, blogController.updateABlogOfAuthUser);
router.route('/delete/:id').delete(authToken.isUserAuthenticated, blogController.deleteUserBlogCreatedByAuthUser);

router.route('/like/:id').get(authToken.isUserAuthenticated, blogController.blogToBeLikeByUser);
router.route('/dislike/:id').get(authToken.isUserAuthenticated, blogController.blogToBeDislikeByUser);

router.route('/comment/:id').get(authToken.isUserAuthenticated, commentController.getAllCommentOnBlog)
router.route('/comment/:id').post(authToken.isUserAuthenticated, commentController.createCommentOnBlog)
router.route('/comment/:id').put( authToken.isUserAuthenticated, commentController.updateCommentOnBlog)
router.route('/comment/:id').delete(authToken.isUserAuthenticated, commentController.deleteCommentOnBlog)


module.exports = router