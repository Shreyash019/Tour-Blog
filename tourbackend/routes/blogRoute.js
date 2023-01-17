const express = require('express');
const router = express.Router();
const blogController = require('./../controllers/blogController');

router.route('/').get(blogController.getBlogHome);
router.route('/createblog').post(blogController.createblog);


router.route('/userblog/:id').get(blogController.getSingleBlog);
router.route('/userblogupdate/:id').patch(blogController.userBlogUpdate);
router.route('/userblogdelete/:id').delete(blogController.deleteUserBlog);


module.exports = router