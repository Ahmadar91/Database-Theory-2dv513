const Sequelize = require('sequelize')
const db = require('../database/connection')
const Gpu = db.define('gpu', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true
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
module.exports = Gpu
