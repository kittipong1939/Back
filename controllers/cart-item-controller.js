const db = require("../models/db");
const CartItemService = require("../service/CartItemService");
const CartService = require("../service/CartService");

exports.createCartItem = async (req, res, next) => {
  const { quantity,cartId,productId } = req.body
  // console.log(req.body);
  

  try {
    const hasCart = await CartService.getCart(req.user.id)
    if (hasCart) {
      await CartItemService.createCartItem(quantity, hasCart.id, productId)
    }
    res.json({message: 'Add to cart Success'})

  } catch (error) {
      next(error)
  }
}


exports.getCartItem = async (req, res, next) => {
  try {
      const getcartitem = await db.cart_item.findMany({
        
      })
      res.json(getcartitem)

  } catch (error) {
      next(error)
  }
}

exports.deleteCartItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const rs = await db.cart_item.delete({
      where: { id: +id } // ใช้เฉพาะ id เท่านั้น
    });
    res.json({ msg: 'Delete ok', result: rs });
  } catch (err) {
    next(err);
  }
};

exports.updateCartItem = async (req, res, next) => {
  // validate req.params + req.body
  const {id} = req.params
  const data = req.body
  try {
    const rs = await db.cart_item.update({
      data :  {...data},
       where: { id:+id} 
    })
    res.json({msg:'Update ok',result:rs})
  }catch(err){
    next(err)
  }
}






























































// Create a new cart item

// exports.getCartItem = async (req, res, next) => {
//   try {
//     const cart = await db.cart_item.findMany();
//     res.json(cart);
//   } catch (error) {
//     next(error);
//   }
// };

// Get cart item by ID
// exports.getCartItemById = async (req, res, next) => {
//   try {
//     const cartItemId = req.params.cartItemId;

//     // Find cart item by ID
//     const cartItem = await Cart_item.findByPk(cartItemId);
//     if (!cartItem) {
//       return res.status(404).json({ error: 'Cart item not found' });
//     }

//     res.status(200).json(cartItem);
//   } catch (error) {
//     next(error);
//   }
// };

// // Update cart item
// exports.updateCartItem = async (req, res, next) => {
//   try {
//     const cartItemId = req.params.cartItemId;
//     const { quantity, subtotal_price } = req.body;

//     // Validate input data
//     if (!(quantity && subtotal_price)) {
//       return res.status(400).json({ error: 'Please provide all required fields' });
//     }

//     // Find cart item by ID
//     const cartItem = await Cart_item.findByPk(cartItemId);
//     if (!cartItem) {
//       return res.status(404).json({ error: 'Cart item not found' });
//     }

//     // Update cart item
//     cartItem.quantity = quantity;
//     cartItem.subtotal_price = subtotal_price;
//     await cartItem.save();

//     res.status(200).json(cartItem);
//   } catch (error) {
//     next(error);
//   }
// };

// // Delete cart item
// exports.deleteCartItem = async (req, res, next) => {
//   try {
//     const cartItemId = req.params.cartItemId;

//     // Find cart item by ID
//     const cartItem = await Cart_item.findByPk(cartItemId);
//     if (!cartItem) {
//       return res.status(404).json({ error: 'Cart item not found' });
//     }

//     // Delete cart item
//     await cartItem.destroy();

//     res.status(204).end(); // No content
//   } catch (error) {
//     next(error);
//   }
// };
