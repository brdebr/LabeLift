const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    operatorsAliases: false,
    force : process.env.DB_RESET === 'true'
});

module.exports = sequelize;