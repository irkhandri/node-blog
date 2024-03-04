const express = require('express');

const blogController = require('../controllers/blog');

const router = express.Router();

router.get('/', blogController.getAllBlogs);

router.get('/blog', blogController.getBlog);

router.get('/add-blog', blogController.getAddBlog);

router.post('/add-blog', blogController.postAddBlog);

router.get('/blog/:blogId', blogController.getBlogById);

module.exports = router;

