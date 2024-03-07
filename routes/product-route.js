const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const ProductController = require('../controllers/product-controller')
const AdminController = require('../controllers/admin-controller')

router.post('/', ProductController.createProduct);

router.get('/all',  ProductController.getProduct);

router.get('/:id',  ProductController.getProductById);

router.put('/:id',authenticate,ProductController.updateProduct);

router.delete('/:id',authenticate,ProductController.deleteProduct);


router.post('/category', AdminController.createCategory);


module.exports = router