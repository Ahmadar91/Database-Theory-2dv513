const Sequelize = require('sequelize')
const db = require('../database/connection')
const Cpu = db.sequelize.define('cpu', {
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
  cache: {
    type: Sequelize.INTEGER
  },
  frequency: {
    type: Sequelize.STRING
  },
  performance: {
    type: Sequelize.FLOAT
  },
  socket: {
    type: Sequelize.STRING
  },
  cores: {
    type: Sequelize.INTEGER
  }

})
// get one cpu
function findOne (data) {
  // console.log('data', data)
  return db.sequelize.query(`SELECT * FROM cpu where name = '${data}'`, { type: db.sequelize.QueryTypes.SELECT })
}
// get all cpus
function findAll () {
  return db.sequelize.query('SELECT * FROM cpu', { type: db.sequelize.QueryTypes.SELECT })
}
// create a cpu
function create (data) {
  return db.connection.query('INSERT INTO cpu set ?', data, function (err, results) {
    if (err) {
      console.log(err.message)
    } else {
      console.log('Successful Query')
    }
  })
}
module.exports = { Cpu, create, findOne, findAll }
