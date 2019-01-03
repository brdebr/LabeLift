const express = require('express')

var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

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
  usersController.getState
)

router.get(
  '/info',
  passport.authenticate('jwt', {
    session: false
  }),
  usersController.getCurrent
)

router.put(
  '/current',
  passport.authenticate('jwt', {
    session: false
  }),
  usersController.updateProfile
)

router.post(
  '/profile-up',
  upload.single('test'),
  passport.authenticate('jwt', {
    session: false
  }),
  usersController.profileUpload
)

module.exports = router
