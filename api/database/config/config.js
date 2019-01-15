module.exports =
{
  "development": {
    "username": "brdebr",
    "password": "devz",
    "database": "labelift_development",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "logging": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    port: 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWD,
    dialect: 'postgres',
    ssl: true
  }
}