const express = require('express');
const router = express.Router();
const blogController = require('./../controllers/blogController');
const authToken = require('./../utils/authToken');

router.route('/').get(authToken.protectResources, blogController.getBlogHome);
router.route('/createblog').post(authToken.protectResources, blogController.createblog);

router.route('/userblogs').get(authToken.protectResources, blogController.getAllBlogCreatedByUser);
router.route('/userblog/:id').get(authToken.protectResources, blogController.getSingleBlog);
router.route('/userblogupdate/:id').patch(authToken.protectResources, blogController.userBlogUpdate);
router.route('/userblogdelete/:id').delete(authToken.protectResources, blogController.deleteUserBlog);


module.exports = router