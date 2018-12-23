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
      reset: false
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
      reset: true
    }
  },

  production: {
    app: {
      name: 'LabeLift'
    },
    db: {
      host: '127.0.0.1',
      database: 'labelift',
      port: 5432,
      user: 'brdebr',
      paswd: 'devz',
      dialect: 'postgres',
      reset: false
    }
  }
}

module.exports = config[env]
