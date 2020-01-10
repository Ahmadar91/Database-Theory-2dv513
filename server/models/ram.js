const Sequelize = require('sequelize')
const db = require('../database/connection')
const Ram = db.define('ram', {
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
module.exports = Ram
