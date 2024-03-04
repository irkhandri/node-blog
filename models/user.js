const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    imageUrl: Sequelize.STRING,

    location: Sequelize.STRING,
    description: Sequelize.STRING,

    soc_facebook: Sequelize.STRING,
    soc_youtube: Sequelize.STRING,
    soc_linkedin: Sequelize.STRING,
    soc_x: Sequelize.STRING,

});

module.exports = User;