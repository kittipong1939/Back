const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const OrderControllerItem = require('../controllers/orderItem-controller')


router.post('/', OrderControllerItem.createOrderItem);
router.get('/', authenticate, OrderControllerItem.getOrderItem);



module.exports = router