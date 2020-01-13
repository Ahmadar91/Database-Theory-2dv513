const Cpu = require('../models/cpu')
const cpuController = {}

cpuController.createCpu = (req, res, next) => {
  const data = {
    name: req.body.name,
    brand: req.body.brand,
    cache: req.body.cache,
    frequency: req.body.frequency,
    performance: req.body.performance,
    socket: req.body.socket,
    cores: req.body.cores
  }
  console.log(req.body)
  Cpu.findOne(data.name).then(cpu => {
    const result = cpu[0]
    if (result) {
      return res.send(JSON.stringify({ Message: 'name exists already, please pick a different one.' }))
    }
    Cpu.create(data)
    return res.status(200).send(JSON.stringify({ Message: 'Cpu Created' }))
  })
    .catch(err => {
      console.log(err)
    })
}

cpuController.GetOneCpu = (req, res, next) => {
  const name = req.body.name

  Cpu.findOne(name).then(cpu => {
    const result = cpu[0]
    if (result) {
      return res.send(JSON.stringify({ Message: 'Invalid' }))
    }
    return res.status(200).send(JSON.stringify({ Message: result }))
  })
    .catch(err => {
      console.log(err)
    })
}
cpuController.GetAllCpus = (req, res, next) => {
  Cpu.findAll().then(cpu => {
    if (!cpu) {
      return res.send(JSON.stringify({ Message: 'empty' }))
    }
    return res.status(200).send(JSON.stringify({ Message: cpu }))
  })
    .catch(err => {
      console.log(err)
    })
}

module.exports = cpuController
