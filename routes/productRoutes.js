const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/productController.js')
router.post ('/create', ProductController.create)

module.exports = router