const Sequelize = require('sequelize')
const db = require('../database/connection')
const Computer = db.sequelize.define('computer', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  memory: {
    type: Sequelize.INTEGER,
    unique: true
  },
  case: {
    type: Sequelize.STRING
  },
  performance: {
    type: Sequelize.FLOAT
  },
  cpu_id: {
    type: Sequelize.INTEGER
  },
  gpu_id: {
    type: Sequelize.INTEGER
  },
  mobo_id: {
    type: Sequelize.INTEGER
  },
  user_id: {
    type: Sequelize.INTEGER
  },
  ram_id: {
    type: Sequelize.INTEGER
  }
})
function findOne (data) {
  // console.log('data', data)
  return db.sequelize.query(`SELECT * FROM computer where user_name = '${data}'`, { type: db.sequelize.QueryTypes.SELECT })
}
function findAll () {
  return db.sequelize.query('SELECT * FROM computer', { type: db.sequelize.QueryTypes.SELECT })
}

function create (data) {
  return db.connection.query('INSERT INTO computer set ?', data, function (err, results) {
    if (err) {
      console.log(err.message)
    } else {
      console.log('Successful Query')
    }
  })
}

module.exports = { Computer, create, findOne, findAll }
