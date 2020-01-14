
const express = require('express')
const computerController = require('../controllers/computerController')

const router = express.Router()

router.post('/createComputer', computerController.createComputer)

router.post('/getComputer', computerController.GetOneComputer)

router.get('/getAllComputer', computerController.GetAllComputer)

router.get('/getByGpu', computerController.getByGpu)
module.exports = router
