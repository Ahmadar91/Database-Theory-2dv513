const Sequelize = require('sequelize')
const db = require('../database/connection')
const Mobo = db.define('mobo', {
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
  socket: {
    type: Sequelize.STRING
  },
  form_factor: {
    type: Sequelize.STRING
  },
  chipset: {
    type: Sequelize.STRING
  },
  DIMM: {
    type: Sequelize.STRING
  }
})
module.exports = Mobo
