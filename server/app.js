const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const PORT = process.env.PORT || 4000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(
//   cors({
//     origin: (origin, cb) => cb(null, true),
//     credentials: true,
//     preflightContinue: true,
//     exposedHeaders: [
//       'Access-Control-Allow-Headers',
//       'Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept',
//       'X-Password-Expired'
//     ],
//     optionsSuccessStatus: 200
//   })
// )
app.use(cors())
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

app.listen(PORT, console.log(`started: on port ${PORT}`))
