const Sequelize = require ('sequelize');

const sequelize = require('../util/database');
// const Tag = require()

const BlogTag = sequelize.define('BlogTag', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      }
    // TagId: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: Tag,
    //     key: 'id'
    //   }
    // },
    // BlogId: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: Blog,
    //     key: 'id'
    //   }
    // }
  });


  module.exports = BlogTag;