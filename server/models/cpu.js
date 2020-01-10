const Sequelize = require('sequelize')
const db = require('../database/connection')
const Cpu = db.define('cpu', {
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
    type: Sequelize.INTEGER
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
module.exports = Cpu
