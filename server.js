const express = require('express')
const next = require('next')
const vhost = require('vhost')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const mainServer = express()
  const server = express()
  const patientServer = express()
  const providerServer = express()

  patientServer.get('/', (req, res) => {
    return app.render(req, res, '/patient', req.query)
  })

  patientServer.get('/*', (req, res) => {
    return app.render(req, res, `/patient${req.path}`, req.query)
  })

  patientServer.all('*', (req, res) => {
    return handle(req, res)
  })

  providerServer.get('/', (req, res) => {
    return app.render(req, res, '/provider', req.query)
  })

  providerServer.get('/*', (req, res) => {
    return app.render(req, res, `/provider${req.path}`, req.query)
  })

  providerServer.all('*', (req, res) => {
    return handle(req, res)
  })

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('/*', (req, res) => {
    return app.render(req, res, `/${req.path}`, req.query)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  mainServer.use(vhost('provider.lvh.me', providerServer))
  mainServer.use(vhost('patient.lvh.me', patientServer))
  mainServer.use(vhost('lvh.me', server))
  mainServer.listen(port, (err) => {
    console.log("err: ",err)
    if (err) throw err

    console.log(`> Ready on http://www.lvk.me:${port}`)
  })
})