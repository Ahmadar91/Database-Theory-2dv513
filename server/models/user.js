const Sequelize = require('sequelize')
const db = require('../database/connection')
const User = db.define('user', {
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
  user_name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  admin: {
    type: Sequelize.BOOLEAN
  }

})
module.exports = User
