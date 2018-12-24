const User = require('../models/user')

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then(users => {
      res.status(200).json({
        message: 'Here is a list of users !',
        data: users
      })
    })
    .catch(err => {
      console.log(err)
    })
}

exports.getCurrent = (req, res, next) => {
  User.findAll()
    .then(users => {
      res.status(200).json({
        message: 'Here is a list of users!',
        data: users
      })
    })
    .catch(err => {
      console.log(err)
    })
}
