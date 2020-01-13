const Sequelize = require('sequelize')
const mysql = require('mysql')
const sequelize = new Sequelize('computer', 'root', 'ddon1icnfk', {
  host: 'localhost',
  dialect: 'mysql'
})

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ddon1icnfk',
  database: 'computer'
})

module.exports = { connection, sequelize }
