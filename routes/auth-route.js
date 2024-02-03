const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const authenticate = require('../middlewares/authenticateP')
const authController = require('../controllers/auth-controller')

router.post('/product', authController.createProduct)
router.post('/category', authController.createCategory)
router.post('/register', authController.register)
router.post('/login', authController.login)


router.get('/me', authenticate, authController.getme) 
router.get('/product1', , authController.getme)
module.exports = router