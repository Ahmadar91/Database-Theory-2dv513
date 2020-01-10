const Sequelize = require('sequelize')

module.exports = new Sequelize('computer', 'root', 'ddon1icnfk', {
  host: '127.0.0.1',
  dialect: 'mysql'
})
