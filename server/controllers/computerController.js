const Computer = require('../models/computer')
const computerController = {}

computerController.createComputer = (req, res, next) => {
  const data = {
    memory: req.body.memory,
    case: req.body.case,
    performance: 10,
    cpu_id: req.body.cpu_id,
    gpu_id: req.body.gpu_id,
    mobo_id: req.body.mobo_id,
    user_name: req.body.username,
    ram_id: req.body.ram_id
  }
  Computer.findOne(data.name).then(computer => {
    const result = computer[0]

    if (result) {
      console.log(result)
      return res.send(JSON.stringify({ Message: 'name exists already, please pick a different one.' }))
    }
    Computer.create(data)
    return res.status(200).send(JSON.stringify({ Message: 'build Created' }))
  })
    .catch(err => {
      console.log(err)
    })
}

computerController.GetOneComputer = (req, res, next) => {
  const name = req.body.name

  Computer.findOne(name).then(computer => {
    const result = computer[0]
    if (result) {
      return res.send(JSON.stringify({ Message: 'Invalid' }))
    }
    return res.status(200).send(JSON.stringify({ Message: result }))
  })
    .catch(err => {
      console.log(err)
    })
}
computerController.GetAllComputer = (req, res, next) => {
  Computer.findAll().then(computer => {
    if (!computer) {
      return res.send(JSON.stringify({ Message: 'empty' }))
    }
    return res.status(200).send(JSON.stringify({ Message: computer }))
  })
    .catch(err => {
      console.log(err)
    })
}

module.exports = computerController
