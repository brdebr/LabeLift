const secrets = require('./secrets');
module.exports = {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    database: 'labelift_development',
    user: secrets.dbUser,
    pass: secrets.dbPasswd,
    reset: false
};