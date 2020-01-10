const Sequelize = require('sequelize')

const sequelize = new Sequelize('computer', 'root', 'ddon1icnf', {
  host: '127.0.0.1',
  dialect: 'mysql'
})

sequelize.authenticate().then(() => console.log('Connected to db').catch(err => console.log(err.message)
)
)
module.exports = sequelize
global.sequelize = sequelize
