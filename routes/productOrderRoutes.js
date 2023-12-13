const express = require('express')
const router = express.Router()

const ProductOrderController = require('../controllers/productOrderController.js')

router.post('/create', ProductOrderController)

module.exports = router