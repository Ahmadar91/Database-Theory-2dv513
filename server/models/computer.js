const Sequelize = require('sequelize')
const db = require('../database/connection')
const Computer = db.sequelize.define('computer', {
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

function findOne (data) {
  // console.log('data', data)
  return db.sequelize.query(`SELECT * FROM computer where name = '${data}'`, { type: db.sequelize.QueryTypes.SELECT })
}

// get one computer from a specific user
function findUser (data) {
  const string = 'CREATE VIEW computersUsers AS ' +
'SELECT computer.name, computer.user_name, computer.case, computer.memory, cpu.name AS cpu_name, gpu.name AS gpu_name, ram.name AS ram_name, mobo.name AS mobo_name ' +
'FROM computer INNER JOIN ' +
'cpu ON computer.cpu_id = cpu.id INNER JOIN ' +
'gpu ON computer.gpu_id = gpu.id INNER JOIN ' +
'ram ON computer.ram_id = ram.id INNER JOIN ' +
'mobo ON computer.mobo_id = mobo.id; ' +
'SELECT * FROM computersUsers ' +
`WHERE user_name = '${data}'; ` +
'DROP VIEW computersUsers'
  // console.log('data', data)
  return db.sequelize.query(string)
}
// get all computer that from the computer table with only id
function findAll () {
  return db.sequelize.query('SELECT * FROM computer', { type: db.sequelize.QueryTypes.SELECT })
}
// create a computer by inserting the ids of the other parts from the other tables
function create (data) {
  return db.connection.query('INSERT INTO computer set ?', data, function (err, results) {
    if (err) {
      console.log(err.message)
    } else {
      console.log('Successful Query')
    }
  })
}
// get all computers using join that returns a view with the name of the parts using the id of for the join
function getComputers () {
  const string = 'CREATE VIEW computers AS ' +
    'SELECT computer.name, computer.user_name, computer.case, computer.memory, cpu.name AS cpu_name, gpu.name AS gpu_name, ram.name AS ram_name, mobo.name AS mobo_name ' +
    'FROM computer INNER JOIN ' +
    'cpu ON computer.cpu_id = cpu.id INNER JOIN ' +
    'gpu ON computer.gpu_id = gpu.id INNER JOIN ' +
    'ram ON computer.ram_id = ram.id INNER JOIN ' +
    'mobo ON computer.mobo_id = mobo.id; ' +
    'SELECT * FROM computers; ' +
    'DROP VIEW computers'
  return db.sequelize.query(string)
}
// count the number of computers gpu by the gpu brand
function getByGpu () {
  const string = 'CREATE VIEW computers AS ' +
    'SELECT computer.id AS id, gpu.brand AS gpu_brand ' +
    'FROM computer INNER JOIN ' +
    'gpu ON computer.gpu_id = gpu.id; ' +
    'SELECT COUNT(id) as number, gpu_brand FROM computers GROUP BY gpu_brand; ' +
    'DROP VIEW computers'

  return db.sequelize.query(string)
}

module.exports = { Computer, create, findOne, findAll, getComputers, getByGpu, findUser }
