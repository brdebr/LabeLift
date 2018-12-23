const bcrypt = require('bcryptjs')
const { secrets } = require('../config')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

exports.signup = (req, res, next) => {
  const email = req.body.email
  const name = req.body.name
  const password = req.body.password

  if (!password || password.length === 0) {
    res.status(500).json({
      message: 'Something went wrong :/',
      errors: ['Password cant be blank or null']
    })
  }

  bcrypt
    .hash(password, secrets.userPassHash)
    .then(hashedPw => {
      const user = new User({
        name: name,
        email: email,
        password: hashedPw
      })
      return user.save()
    })
    .then(result => {
      res.status(201).json({
        message: 'User created! :D',
        data: {
          user: {
            id: result.id,
            name: result.name
          }
        }
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: 'Something went wrong :/',
        errors: err.errors.map(error => error.message)
      })
    })
}

exports.login = async (req, res, next) => {
  const email = req.body.email
  const password = req.body.password

  User.findOne({
    where: {
      email: email
    }
  })
    .then(user => {
      if (bcrypt.compare(password, user.password)) {
        let token = jwt.sign(
          {
            id: user.id,
            email: user.email,
            name: user.name
          },
          secrets.jwtSecret,
          {
            expiresIn: '1h'
          }
        )
        res.json({
          message: 'Login Successfully! :D',
          data: {
            userId: user.id,
            userName: user.name,
            userEmail: user.email
          },
          token: 'Bearer ' + token
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(400).json({
        message: 'Something went wrong :/'
      })
    })
}
