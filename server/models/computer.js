const Sequelize = require('sequelize')
const db = require('../database/connection')
const Computer = db.define('computer', {
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
module.exports = Computer
