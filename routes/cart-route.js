const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const CartController = require('../controllers/cart-controller')

router.post('/', CartController.createCart);
router.get('/', CartController.getCart);
router.put('/:id', authenticate,CartController.updateCart);
router.get('/last', CartController.getCartlast);
module.exports = router