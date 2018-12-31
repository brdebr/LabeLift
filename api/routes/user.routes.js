const express = require('express')

const passport = require('passport')
const usersController = require('../controllers/user')

const router = express.Router()

router.get(
  '/list',
  passport.authenticate('jwt', { session: false }),
  usersController.getUsers
)

router.get(
  '/current',
  passport.authenticate('jwt', {
    session: false
  }),
  usersController.getCurrent
)

module.exports = router
