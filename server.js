require('dotenv').config()

const express = require('express')
const app = express()

const apiRoutes = require('./routes/api');
 
app.get('/', function(req, res) {
  res.type('text')
    .send('v4ex-api-symbol-information')
})

apiRoutes(app)
 
const port = process.env.PORT || 4004
const server = app.listen(port, function() {
  console.log('App listening on port %s, in environment %s!', port, (process.env.NODE_ENV || ''))
})

module.exports = {
  app,
  server
}
