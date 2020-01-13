
const express = require('express')
const cpuController = require('../controllers/cpuController')

const router = express.Router()

router.post('/createCpu', cpuController.createCpu)

router.post('/getCpu', cpuController.GetOneCpu)

router.get('/getAllCpu', cpuController.GetAllCpus)

module.exports = router
