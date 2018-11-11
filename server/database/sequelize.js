const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'postgres',
    database: 'labelift_development',
    username: 'brdebr',
    password:'devz',
    operatorsAliases: false,
});

module.exports = sequelize;