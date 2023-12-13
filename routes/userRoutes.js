const express = require('express')
const router = express.Router()

const UserController = require('../controllers/userController.js')
router.post ('/register', UserController.create)

modules.exports = router