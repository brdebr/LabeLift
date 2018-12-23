const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const config_ = require('../api/config.js')
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const db = require('../api/database')

app.set('port', port)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)
  // Database connection
  db.sequelize
    .sync()
    .then(() => {
      consola.ready({
        // eslint-disable-next-line prettier/prettier
        message: `Database connected: ${config_.db.dialect}:://${config_.db.host}:${config_.db.port}/${config_.db.database}`,
        badge: true
      })
      // Express server
      app.listen(port, host)
      consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
      })
    })
    .catch(e => {
      throw new Error(e)
    })
}
start()
