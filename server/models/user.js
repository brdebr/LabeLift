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
  password: {
    type: Sequelize.STRING,
    allowNull:false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: { len:[1], isEmail: true }
  }
});

module.exports = User;