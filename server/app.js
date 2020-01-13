const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')

const PORT = process.env.PORT || 4000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())
app.use(logger('dev'))

// db Connection
const db = require('./database/connection')
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

app.get('', require('./routes/homeRouter'))
app.use(require('./routes/authRouter'))
app.use(require('./routes/gpuRouter'))
app.use(require('./routes/cpuRouter'))
app.use(require('./routes/moboRouter'))
app.use(require('./routes/ramRouter'))
app.use(require('./routes/computerRouter'))
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
