module.exports = {
    host: process.env.DATABASE_HOST,
    port: 5432,
    dialect: 'postgres',
    database: process.env.DATABASE,
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASSWD,
    reset: false
};