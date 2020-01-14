const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const path = require('path')

const PORT = process.env.PORT || 4000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'build')))

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
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.get('/statistics/byGpu', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.get('/byUser', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// catch 404
app.use((req, res, next) => {
  res.status(404)
  res.sendFile(path.join(__dirname, 'public', '404.html'))
})
// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.sendFile(path.join(__dirname, 'public', '500.html'))
})

app.listen(PORT, console.log(`started: on port ${PORT}`))
