const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController.js')
const { authentication } = require('../middleware/authentication.js')

router.get ('/getAllUsers', authentication, UserController.findAll)
router.post('/register', UserController.create)
router.post ('/login', UserController.login)
router.delete('/delete/:id', authentication, UserController.deleteUSer)
router.delete('/logout', authentication, UserController.logout)

modules.exports = router