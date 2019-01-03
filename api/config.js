const path = require('path')
const env = process.env.NODE_ENV || 'development'

const config = {
  development: {
    app: {
      name: 'LabeLift'
    },
    secrets: {
      userPassHash: 10,
      jwtSecret: 'my-secretshhh',
      dbUser: 'myusername',
      dbPasswd: 'mypassword'
    }
  },

  test: {
    app: {
      name: 'LabeLift'
    },
    secrets: {
      userPassHash: 10,
      jwtSecret: 'my-secretshhh',
      dbUser: 'myusername',
      dbPasswd: 'mypassword'
    }
  },

  production: {
    app: {
      name: 'LabeLift'
    },
    secrets: {
      userPassHash: 10,
      jwtSecret: process.env.JWT_SECRET,
      dbUser: 'myusername',
      dbPasswd: 'mypassword'
    }
  }
}

module.exports = config[env]
