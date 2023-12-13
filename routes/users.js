const express = require ('express')
const router = express.Router()
const UserController = require('../controllers/userController.js')
router.post('/', UserController.create)
module.exports = router

//Pendiente terminar