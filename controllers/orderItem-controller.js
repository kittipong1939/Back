const db = require('../models/db')
const OrderItemService = require("../service/OrderItemService");



 
  exports.createOrderItem = async (req, res, next) => {
    try {
      const { cart_itemId } = req.body;
      
      // Validation
      if (!cart_itemId) {
        return next(new Error("Please provide the category name"));
      }
  
      const orderitem = await db.ordersItem.create({
        data: {
          cart_itemId,
        },
      });
  
      res.json({ msg: 'Category created successfully', orderitem });
    } catch (error) {
      next(error);
    }
  };
  exports.getOrderItem = async (req, res, next) => {
    try {
        const getorder = await db.ordersItem.findMany()
        res.json(getorder)
  
    } catch (error) {
        next(error)
    }
  }
  