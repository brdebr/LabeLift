const JwtStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const moment = require('moment')
const User = require('../models/user')

const { secrets } = require('../config')

const opts = {}
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken()
opts.secretOrKey = secrets.jwtSecret

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (payload, done) => {
      User.findOne({
        where: {
          email: payload.email
        }
      })
        .then(user => {
          if (user) {
            let safeUser = (({ id, name, email }) => ({ id, name, email }))(
              user
            )
            let now = moment()
            let exp = moment.unix(payload.exp)
            safeUser.expHuman = now.to(exp)
            safeUser.exp = exp.format('DD/MM/YYYY - hh:mm:ss')
            done(null, safeUser)
            return safeUser
          }
          done(null, false)
        })
        .catch(err => {
          console.log(err)
          done(err)
        })
    })
  )
}
