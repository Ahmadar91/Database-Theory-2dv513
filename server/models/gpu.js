const Sequelize = require('sequelize')
const db = require('../database/connection')
const Gpu = db.sequelize.define('gpu', {
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
  performance: {
    type: Sequelize.FLOAT
  }

})

function findOne (data) {
  console.log('data', data)
  return db.sequelize.query(`SELECT * FROM gpu where name = '${data}'`, { type: db.sequelize.QueryTypes.SELECT })
}
function findAll () {
  return db.sequelize.query('SELECT * FROM gpu', { type: db.sequelize.QueryTypes.SELECT })
}

function create (data) {
  return db.connection.query('INSERT INTO gpu set ?', data, function (err, results) {
    console.log(data)
    if (err) {
      console.log(err.message)
    } else {
      console.log('Successful Query')
    }
  })
}

module.exports = { Gpu, create, findOne, findAll }
