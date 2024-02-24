const db = require("../models/db");
const CartService = require("../service/CartService");

// 
exports.getCart = async (req, res, next) => {
  try {
      const getcart = await db.cart.findMany()
      res.json(getcart)

  } catch (error) {
      next(error)
  }
}




exports.createCart = async (req, res, next) => {
  const { total, userId } = req.body

  try {
      const cart = await CartService.createCart(total,userId)
      res.json(cart)

  } catch (error) {
      next(error)
  }
}

exports.updateCart = async (req, res, next) => {
  // validate req.params + req.body
  const {id} = req.params
  const data = req.body
  try {
    const rs = await db.cart.update({
      data :  {...data},
       where: { id:+id} 
    })
    res.json({msg:'Update ok',result:rs})
  }catch(err){
    next(err)
  }
}
exports.getCartlast = async (req, res, next) => {
  try {
    const latestOrder = await db.cart.findFirst({
      orderBy: {
        id: 'desc'
      }
    });
    res.json(latestOrder);
  } catch (error) {
    next(error);
  }
}