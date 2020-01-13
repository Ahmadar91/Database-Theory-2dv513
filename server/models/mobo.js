const Sequelize = require('sequelize')
const db = require('../database/connection')
const Mobo = db.sequelize.define('mobo', {
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
  socket: {
    type: Sequelize.STRING
  },
  form_factor: {
    type: Sequelize.STRING
  },
  chipset: {
    type: Sequelize.STRING
  },
  DIMM: {
    type: Sequelize.STRING
  }
})
function findOne (data) {
  // console.log('data', data)
  return db.sequelize.query(`SELECT * FROM mobo where name = '${data}'`, { type: db.sequelize.QueryTypes.SELECT })
}
function findAll () {
  return db.sequelize.query('SELECT * FROM mobo', { type: db.sequelize.QueryTypes.SELECT })
}

function create (data) {
  return db.connection.query('INSERT INTO mobo set ?', data, function (err, results) {
    if (err) {
      console.log(err.message)
    } else {
      console.log('Successful Query')
    }
  })
}
module.exports = { Mobo, create, findOne, findAll }
