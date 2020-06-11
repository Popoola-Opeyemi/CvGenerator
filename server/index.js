const express = require('express')
const consola = require('consola')
const genRouter = require("./routes")
const { Nuxt, Builder } = require('nuxt')
const app = express()
const cors = require('cors')


// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  console.log(host, port)
  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(cors())
  app.use(express.json())
  console.log("__Dirname", __dirname)
  app.use('/static', express.static(__dirname + "/public"))
  // app.use(express.static(path.join(__dirname, 'public')))

  app.use(function (error, req, res, next) {
    if (error instanceof SyntaxError) { //Handle SyntaxError here.
      return res.status(500).send({ data: "Invalid data", errors: true, });
    } else {
      next();
    }
  });

  app.use(genRouter)


  // Give nuxt middleware to express
  app.use(nuxt.render)


  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
