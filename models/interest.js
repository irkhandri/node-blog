const Sequelize = require ('sequelize');

const sequelize = require('../util/database');

const Interest = sequelize.define("interest", {
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
    description:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});
module.exports = Interest;