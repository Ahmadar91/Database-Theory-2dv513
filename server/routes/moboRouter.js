
const express = require('express')
const moboController = require('../controllers/moboController')

const router = express.Router()

router.post('/createMobo', moboController.createMobo)

router.post('/getMobo', moboController.GetOneMobo)

router.get('/getAllMobo', moboController.GetAllMobo)

module.exports = router
