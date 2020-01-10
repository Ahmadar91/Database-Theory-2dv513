const Sequelize = require('sequelize')
const db = require('../database/connection')
const User = db.define('users', {
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
module.exports = User
