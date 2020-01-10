const Sequelize = require('sequelize')

module.exports = new Sequelize('computer', 'root', 'ddon1icnfk', {
  host: 'localhost',
  dialect: 'mysql'
})
