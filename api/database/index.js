// TODO: Fix this mess >.<
const Sequelize = require('sequelize')
const { db } = require('../config')
if (process.env.NODE_ENV === 'production') {
  const sequelize = new Sequelize(process.env.DATABASE_URL, {
    host: db.host,
    port: db.port,
    dialect: db.dialect,
    database: db.database,
    username: db.user,
    password: db.passwd,
    operatorsAliases: false,
    force: db.reset,
    logging: db.logging,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true
      }
    }
  })
  module.exports = sequelize
} else {
  const sequelize = new Sequelize({
    host: db.host,
    port: db.port,
    dialect: db.dialect,
    database: db.database,
    username: db.user,
    password: db.passwd,
    operatorsAliases: false,
    force: db.reset,
    logging: db.logging
  })
  module.exports = sequelize
}
