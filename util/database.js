const Sequelize = require('sequelize');

const sequelize = new Sequelize ('myblog', 'root', 'Irkhandri', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;