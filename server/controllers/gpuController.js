const Gpu = require('../models/Gpu')
const gpuController = {}

gpuController.createGpu = (req, res, next) => {
  const data = {
    name: req.body.name,
    brand: req.body.brand,
    performance: req.body.performance
  }
  Gpu.findOne(data.name).then(gpu => {
    const result = gpu[0]
    if (result) {
      return res.send(JSON.stringify({ Message: 'name exists already, please pick a different one.' }))
    }
    Gpu.create(data)
    return res.status(200).send(JSON.stringify({ Message: 'Gpu Created' }))
  })
    .catch(err => {
      console.log(err)
    })
}

gpuController.GetOneGpu = (req, res, next) => {
  const name = req.body.name
  Gpu.findOne(name).then(gpu => {
    const result = gpu[0]
    if (result) {
      return res.send(JSON.stringify({ Message: 'Invalid' }))
    }
    return res.status(200).send(JSON.stringify({ Message: result }))
  })
    .catch(err => {
      console.log(err)
    })
}
gpuController.GetAllGpus = (req, res, next) => {
  Gpu.findAll().then(gpu => {
    if (!gpu) {
      return res.send(JSON.stringify({ Message: 'empty' }))
    }
    return res.status(200).send(JSON.stringify({ Message: gpu }))
  })
    .catch(err => {
      console.log(err)
    })
}

module.exports = gpuController
