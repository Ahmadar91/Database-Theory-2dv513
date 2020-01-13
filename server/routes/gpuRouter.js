
const express = require('express')
const gpuController = require('../controllers/gpuController')

const router = express.Router()

router.post('/createGpu', gpuController.createGpu)

router.post('/getGpu', gpuController.GetOneGpu)

router.get('/getAllGpu', gpuController.GetAllGpus)

module.exports = router
