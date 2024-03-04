const path = require('path');

const express = require('express');

const sequelize = require('./util/database');

// ----- MODELS
const Blog = require('./models/blog');
const User = require('./models/user');
const Interest = require('./models/interest');
const Tag = require('./models/tag');
const BlogTag = require('./models/blog_tag');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const errorControler = require('./controllers/error');
const blogRoutes = require('./routes/blog');
const userRoutes = require('./routes/user');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//  DELETE , only for testing
app.use((req,res,next) => {
    User.findByPk(1)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {
            console.log(err);
        })
});

app.use(blogRoutes);
app.use('/users', userRoutes);
app.use(errorControler.get404);


Blog.belongsTo(User, {onDelete: 'CASCADE'});
User.hasMany(Blog);

User.hasMany(Interest);
Blog.belongsToMany(Tag,{through: BlogTag});
Tag.belongsToMany(Blog, {through: BlogTag});


sequelize
//   .sync({ force: true })
  .sync()
  .then(result => {
    return User.findByPk(1);
    // console.log(result);
  })
  .then(user => {
    if (!user) {
      return User.create({ name: 'Andrii', email: 'test@test.com', username: "irkhandri" });
    }
    return user;
  })
  .then(cart => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });