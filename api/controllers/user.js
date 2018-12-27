const User = require('../models/user')

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then(users => {
      res.status(200).json({
        message: 'Here is a list of users !',
        length: users.length,
        data: users
      })
    })
    .catch(err => {
      console.log(err)
    })
}

exports.getCurrent = (req, res, next) => {
  res.json({
    message: 'Here is your current user !',
    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      tokenExpHuman: 'Expires ' + req.user.expHuman,
      tokenExp: req.user.exp
    }
  })
}
