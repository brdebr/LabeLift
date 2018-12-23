const Sequelize = require('sequelize')
const { db } = require('../config')
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
