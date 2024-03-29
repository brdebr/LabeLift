'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      pictureId: DataTypes.STRING,
    },
    {}
  )
  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}
