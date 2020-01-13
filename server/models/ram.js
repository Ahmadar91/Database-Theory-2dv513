const Sequelize = require('sequelize')
const db = require('../database/connection')
const Ram = db.sequelize.define('ram', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  brand: {
    type: Sequelize.STRING
  },
  DDR: {
    type: Sequelize.INTEGER
  },
  capacity: {
    type: Sequelize.INTEGER
  },
  frequency: {
    type: Sequelize.INTEGER
  },
  performance: {
    type: Sequelize.FLOAT
  }

})
function findOne (data) {
  // console.log('data', data)
  return db.sequelize.query(`SELECT * FROM ram where name = '${data}'`, { type: db.sequelize.QueryTypes.SELECT })
}
function findAll () {
  return db.sequelize.query('SELECT * FROM ram', { type: db.sequelize.QueryTypes.SELECT })
}

function create (data) {
  return db.connection.query('INSERT INTO ram set ?', data, function (err, results) {
    if (err) {
      console.log(err.message)
    } else {
      console.log('Successful Query')
    }
  })
}

module.exports = { Ram, create, findOne, findAll }