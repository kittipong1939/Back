const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const CartController = require('../controllers/cart-controller')

router.post('/', authenticate,CartController.createCart);
router.get('/', authenticate,CartController.getCart);
router.put('/:id', authenticate,CartController.updateCart);
router.get('/last', CartController.getCartlast);
module.exports = router