var express = require('express')
var router = express.Router()

const homeControllers = require('../controllers/homeControllers')

router.get('/', homeControllers.show)

module.exports = router