const Blog = require('../models/blog');
const User = require('../models/user');

exports.getAllBlogs = (req, res, next) => {

    Blog.findAll({
        include: User
    })
        .then(blogs => {
            // console.log("!!!!!!!!!!!!!!!!!" , blogs);
            res.render('blog/blogs', {
                pageTitle: 'MyBlog',
                path: '/',
                blogs:blogs
            });
        })
        .catch(err => {
            console.log(err);
        })

};

exports.getBlog = (req, res, next) => {
    res.render('blog/blog', {
        pageTitle: "Blog",
        path: '/blog',
    });
};

exports.getAddBlog = (req, res, next) => {
    res.render('blog/edit-blog', {
        pageTitle: 'Add Blog',
        path: '/add-blog'
    });
};

exports.postAddBlog = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;

    // console.log('!!!!!!!!!!!!!',req.body );

    req.user
        .createBlog({
            title: title,
            imageUrl: imageUrl,
            description: description
        })
        .then(result => {
            console.log('Create Blog');
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
        });
};


exports.getBlogById = (req, res, next) => {
    const blogId = req.params.blogId;
    Blog.findByPk(blogId,{include: User})
        .then (blog => {
            // console.log('!!!!!!!!!!!!!!', blog);
            res.render ('blog/blog', {
                pageTitle: blog.title,
                path: '/',
                blog: blog
            })
        })
        .catch(err => {
            console.log(err);
        })
};