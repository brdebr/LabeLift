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

exports.getState = (req, res, next) => {
  User.findByPk(req.user.id)
    .then(result => {
      // TODO: deconstruct and create safeUser
      // console.log(req.user);
      let user = {
        id: result.id,
        name: result.name,
        email: result.email
      }
      res.status(200).json({
        user,
        token: {
          tokenIat: req.user.iat,
          tokenIatHuman: req.user.iatHuman,
          tokenExpHuman: 'Expires ' + req.user.expHuman,
          tokenExp: req.user.exp
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
}

exports.getCurrent = (req, res, next) => {
  User.findOne({
    where: {
      id: req.user.id
    },
    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
  })
    .then(data => {
      res.status(200).json({
        message: 'Here is your current user !',
        data
      })
    })
    .catch(err => {
      console.log(err)
    })
}

exports.updateProfile = async (req, res, next) => {
  let newUser = req.body.data
  try {
    let oldUser = await User.findByPk(req.user.id)
    let result = await oldUser.update(newUser)

    res.json({
      message: 'Here is your updated user !',
      user: newUser
    })
  } catch (err) {
    console.log(err)
    res.json({
      message: 'Something went wrong :/'
    })
  }
}

exports.profileUpload = (req, res, next) => {
  res.set('Content-Type', 'text/plain')
  res.send(req.file.filename)
}
