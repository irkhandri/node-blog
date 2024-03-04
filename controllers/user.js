const Blog = require('../models/blog');
const User = require('../models/user');

exports.getUserBuId = (req, res, next) => {
    const user = req.user;
    // console.log('!!!!!!!!___!!!!!!!!!!', user);
    
    User.findByPk(user.id, {
        include: Blog
    })
    .then(user => {
        res.render('user/account', {
            pageTitle: user.username,
            path: '/my-account',
            user: user,
            blogs: user.blogs
        })
    })
    .catch(err => console.log(err));
};