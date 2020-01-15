const Sequelize = require('sequelize')
const mysql = require('mysql')

const sequelize = new Sequelize('computer', 'dbadmin', 'admin', {
  host: '139.59.137.181',
  dialect: 'mysql',
  dialectOptions: {
    multipleStatements: true
  }
})

const connection = mysql.createConnection({
  host: '139.59.137.181',
  user: 'dbadmin',
  password: 'admin',
  database: 'computer',
  multipleStatements: true
})
module.exports = { connection, sequelize }
