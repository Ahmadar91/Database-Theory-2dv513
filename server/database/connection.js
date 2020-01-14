const Sequelize = require('sequelize')
const mysql = require('mysql')
const sequelize = new Sequelize('computer', 'root', 'ddon1icnfk', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    multipleStatements: true
  }
})

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ddon1icnfk',
  database: 'computer',
  multipleStatements: true
})
module.exports = { connection, sequelize }
