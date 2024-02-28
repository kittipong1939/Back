const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const OrderController = require('../controllers/order-controller')


router.post('/',authenticate, OrderController.createOrder);
router.get('/', authenticate, OrderController.getOrder);
router.put('/:id', authenticate, OrderController.updateOrder);
router.get('/last', authenticate, OrderController.getOrderlast);

module.exports = router