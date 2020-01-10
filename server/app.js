const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const PORT = process.env.PORT || 4000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// db Connection
require('./database/connection')

app.get('/', (req, res) => {
  res.send('working')
})

app.listen(PORT, console.log(`started: listin g on port ${PORT}`))
