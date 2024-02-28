const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const CartItemController = require('../controllers/cart-item-controller')



router.post('/', authenticate,CartItemController.createCartItem);

router.get('/',authenticate, CartItemController.getCartItem);
router.put('/:id',authenticate, CartItemController.updateCartItem);


router.delete('/:id',authenticate, CartItemController.deleteCartItem);
module.exports = router