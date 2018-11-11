const Sequelize = require('sequelize');

const sequelize = require('../database/sequelize');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  surname: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING
});

module.exports = User;