const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const authController = require('../controllers/auth-controller')
const AdminController = require('../controllers/admin-controller')


router.post('/register', authController.register)



router.post('/login', authController.login)
router.get('/me', authenticate, authController.getme) 


router.get('/category', authenticate, AdminController.getCategories);

module.exports = router