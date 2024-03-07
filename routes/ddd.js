const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const ProductController = require('../controllers/product-controller')
const cartController = require('../controllers/cart-controller');
const cartItemController = require('../controllers/cart-item-controller')




module.exports = router