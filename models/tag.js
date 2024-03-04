const Sequelize = require ('sequelize');

const sequelize = require('../util/database');

const Tag = sequelize.define("tag", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
});

module.exports = Tag;