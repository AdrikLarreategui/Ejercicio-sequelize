const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController.js')
const { authentication } = require('../middlewares/authentication')

router.post ('/register', UserController.create)
router.post ('/login', UserController.login)
router.delete('/delete/:id', authentication, UserController.deleteUSer)

modules.exports = router