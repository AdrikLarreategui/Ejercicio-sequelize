const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/categoryController.js')

router.post('/create', CategoryController.create)

module.exports = router