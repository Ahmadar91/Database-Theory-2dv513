const Sequelize = require('sequelize')
const db = require('../database/connection')
const User = db.sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  user_name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.TEXT
  }

})
function findOne (data) {
  console.log('data', data)
  return db.sequelize.query(`SELECT * FROM users where user_name = '${data}'`, { type: db.sequelize.QueryTypes.SELECT })
}

function create (data) {
  return db.connection.query('INSERT INTO users set ?', data, function (err, results) {
    if (err) {
      console.log(err.message)
    } else {
      console.log('Successful Query')
      console.log(data)
    }
  })
}
module.exports = { User, findOne, create }
