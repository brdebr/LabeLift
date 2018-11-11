const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const sequelize = new Sequelize({
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    database: dbConfig.database,
    username: dbConfig.user,
    password: dbConfig.pass,
    operatorsAliases: false,
    force : dbConfig.reset
});

module.exports = sequelize;