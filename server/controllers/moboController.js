const Mobo = require('../models/mobo')
const moboController = {}

moboController.createMobo = (req, res, next) => {
  const data = {
    name: req.body.name,
    brand: req.body.brand,
    socket: req.body.socket,
    formFactor: req.body.formFactor,
    chipset: req.body.chipset,
    DIMM: req.body.DIMM
  }
  Mobo.findOne(data.name).then(mobo => {
    const result = mobo[0]

    if (result) {
      console.log(result)
      return res.send(JSON.stringify({ Message: 'name exists already, please pick a different one.' }))
    }
    Mobo.create(data)
    return res.status(200).send(JSON.stringify({ Message: 'Mobo Created' }))
  })
    .catch(err => {
      console.log(err)
    })
}

moboController.GetOneMobo = (req, res, next) => {
  const name = req.body.name

  Mobo.findOne(name).then(mobo => {
    const result = mobo[0]
    if (result) {
      return res.send(JSON.stringify({ Message: 'Invalid' }))
    }
    return res.status(200).send(JSON.stringify({ Message: result }))
  })
    .catch(err => {
      console.log(err)
    })
}
moboController.GetAllMobo = (req, res, next) => {
  Mobo.findAll().then(mobo => {
    if (!mobo) {
      return res.send(JSON.stringify({ Message: 'empty' }))
    }
    return res.status(200).send(JSON.stringify({ Message: mobo }))
  })
    .catch(err => {
      console.log(err)
    })
}

module.exports = moboController
