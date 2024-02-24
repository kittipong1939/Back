const db = require('../models/db')
const OrderItem = require("../service/OrderService");



 
exports.createOrder = async(req,res,next)=>{
    const data = req.body
    try {
      
      const rs =await db.order.create({
        data: {...data}
      })
      res.json({msg:'Create Ok',result : rs})
  
    } catch (err) {
      next(err)
    }
  }
  
  exports.getOrder = async (req, res, next) => {
    try {
        const getorder = await db.order.findMany()
        res.json(getorder)
  
    } catch (error) {
        next(error)
    }
  }
  exports.getOrderlast = async (req, res, next) => {
    try {
      const latestOrder = await db.order.findFirst({
        orderBy: {
          id: 'desc'
        }
      });
      res.json(latestOrder);
    } catch (error) {
      next(error);
    }
  }
  
  exports.updateOrder = async (req, res, next) => {
    // validate req.params + req.body
    const {id} = req.params
    const data = req.body
    try {
      const rs = await db.order.update({
        data :  {...data},
         where: { id:+id} 
      })
      res.json({msg:'Update ok',result:rs})
    }catch(err){
      next(err)
    }
  }