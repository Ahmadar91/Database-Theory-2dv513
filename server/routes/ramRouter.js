
const express = require('express')
const ramController = require('../controllers/ramController')

const router = express.Router()

router.post('/createRam', ramController.createRam)

router.post('/getRam', ramController.GetOneRam)

router.get('/getAllRam', ramController.GetAllRam)

module.exports = router
