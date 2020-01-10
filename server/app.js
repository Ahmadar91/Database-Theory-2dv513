const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const logger = require('morgan')

const PORT = process.env.PORT || 4000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())
app.use(logger('dev'))

// db Connection
const db = require('./database/connection')
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

app.get('', require('./routes/homeRouter'))
app.use(require('./routes/authRouter'))
// catch 404
app.use((req, res, next) => {
  res.status(404)
  res.send()
})
// error handler
app.use((err, req, res, next) => {
  console.log(err)

  res.status(err.status || 500)
  res.send()
})
app.listen(PORT, console.log(`started: on port ${PORT}`))
