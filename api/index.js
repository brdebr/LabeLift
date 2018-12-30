const express = require('express')
const morgan = require('morgan')
const passport = require('passport')
const bodyParser = require('body-parser')

const db = require('./database/models/index')

// Create express instance
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))

// Allow CORS

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

// PASSPORT
app.use(passport.initialize())
require('./plugins/passport')(passport)

// ROUTES

const userRoutes = require('./routes/user.routes')
const authRoutes = require('./routes/auth.routes')

let apiURL = ''

if (process.env.API_ONLY == 'true') {
  apiURL = '/api'
}

// Import API Routes
app.use(apiURL + '/users', userRoutes)
app.use(apiURL + '/auth', authRoutes)

db.sequelize
  .sync()
  .then(result => {
    console.log(
      `\n🚀 Connected to Database! :D\n` +
        `  - DB Name: '${result.config.database}'\n` +
        `  - Port: ${result.config.port}\n` +
        `  - Dialect: ${result.options.dialect}\n`
    )
  })
  .catch(err => {
    console.log(err)
  })

if (process.env.API_ONLY == 'true') {
  let routesList = app._router.stack

  app.listen(3000, () => {
    console.log(
      `\n🚀 Express DEV API server up! :D\n` +
        `  - Start time: ${new Date(Date.now()).toLocaleString()}\n` +
        `  - Port: ${3000}\n` +
        `  - Routes:\n` +
        `     - /api/WIP\n`
    )
  })
} else {
  // Export the server middleware
  module.exports = {
    path: '/api',
    handler: app
  }
}
