const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const authController = require('../controllers/auth-controller')
const ProductController = require('../controllers/product-controller')
const cartController = require('../controllers/cart-controller');
const cartItemController = require('../controllers/cart-item-controller')
const AdminController = require('../controllers/admin-controller')


router.post('/register', authController.register)



router.post('/login', authController.login)
router.get('/me', authenticate, authController.getme) 

router.post('/product', AdminController.createProduct)
router.post('/category', AdminController.createCategory)
router.get('/category1', authenticate, ProductController.getCategories);
router.get('/product1', authenticate, ProductController.getProduct);
router.delete('/delete/:id',authenticate,AdminController.deleteProduct)
// router.post('/create-carts', cartController.createCartItem)

router.put('/:id',authenticate,AdminController.updateProduct)


// Routes for managing carts
router.post('/create-cart', cartController.createCart);
router.get('/cart1',authenticate, ProductController.getCart1);
// router.get('/:cartId', cartController.getCartById);
// router.put('/:cartId', cartController.updateCartTotal);
// router.delete('/:cartId', cartController.deleteCart);

// Routes for managing cart items
router.post('/cart-items', cartItemController.CartItem);
router.get('/cart2',authenticate, ProductController.getCartItem1);
router.get('/cart-items/:cartItemId', cartItemController.getCartItemById);
router.put('/cart-items/:cartItemId', cartItemController.updateCartItem);
router.delete('/cart-items/:cartItemId', cartItemController.deleteCartItem);

module.exports = router