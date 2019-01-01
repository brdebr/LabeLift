const { User } = require('../database/models/')

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then(data => {
      res.status(200).json({
        message: 'Here is a list of users !',
        length: data.length,
        data
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

exports.profileUpload = (req, res, next) => {
  res.set('Content-Type', 'text/plain')
  res.send(req.file.filename)
}
