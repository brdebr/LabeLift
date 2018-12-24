const path = require('path')
const env = process.env.NODE_ENV || 'development'

const config = {
  development: {
    app: {
      name: 'LabeLift'
    },
    db: {
      host: '127.0.0.1',
      database: 'labelift_development',
      port: 5432,
      user: 'brdebr',
      paswd: 'devz',
      dialect: 'postgres',
      reset: false,
      logging: false
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
    db: {
      host: '127.0.0.1',
      database: 'labelift_test',
      port: 5432,
      user: 'brdebr',
      paswd: 'devz',
      dialect: 'postgres',
      reset: true,
      logging: false
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
    db: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE,
      port: 5432,
      user: process.env.DATABASE_USER,
      paswd: process.env.DATABASE_PASSWD,
      dialect: 'postgres',
      reset: false,
      logging: false
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
