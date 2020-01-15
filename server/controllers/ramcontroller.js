const Ram = require('../models/ram')
const ramController = {}

ramController.createRam = (req, res, next) => {
  const data = {
    name: req.body.name,
    brand: req.body.brand,
    DDR: req.body.DDR,
    frequency: req.body.frequency,
    performance: req.body.performance
  }
  Ram.findOne(data.name).then(ram => {
    const result = ram[0]

    if (result) {
      console.log(result)
      return res.send(JSON.stringify({ Message: 'name exists already, please pick a different one.' }))
    }
    Ram.create(data)
    return res.status(200).send(JSON.stringify({ Message: 'Ram Created' }))
  })
    .catch(err => {
      console.log(err)
    })
}

ramController.GetOneRam = (req, res, next) => {
  const name = req.body.name

  Ram.findOne(name).then(ram => {
    const result = ram[0]
    if (result) {
      return res.send(JSON.stringify({ Message: 'Invalid' }))
    }
    return res.status(200).send(JSON.stringify({ Message: result }))
  })
    .catch(err => {
      console.log(err)
    })
}
ramController.GetAllRam = (req, res, next) => {
  Ram.findAll().then(ram => {
    if (!ram) {
      return res.send(JSON.stringify({ Message: 'empty' }))
    }
    return res.status(200).send(JSON.stringify({ Message: ram }))
  })
    .catch(err => {
      console.log(err)
    })
}

module.exports = ramController
