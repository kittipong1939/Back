const db = require("../models/db");

// Create a new cart item
exports.createCartItem = async (req, res, next) => {
    try {
      const { quantity, subtotal_price, cartId, productId } = req.body;
  
      // Validate input data
      if (!(quantity && subtotal_price && cartId && productId)) {
        return res.status(400).json({ error: 'Please provide all required fields' });
      }
  
      // Create a new cart item
      const newCartItem = await db.Cart_item.create({
        data: {
          quantity,
          subtotal_price,
          cartId,
          productId
        }
      });
  
      res.status(201).json({ msg: 'Cart item created successfully', cartItem: newCartItem });
    } catch (error) {
      next(error);
    }
  };
  

// Get cart item by ID
exports.getCartItemById = async (req, res, next) => {
  try {
    const cartItemId = req.params.cartItemId;

    // Find cart item by ID
    const cartItem = await Cart_item.findByPk(cartItemId);
    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    res.status(200).json(cartItem);
  } catch (error) {
    next(error);
  }
};

// Update cart item
exports.updateCartItem = async (req, res, next) => {
  try {
    const cartItemId = req.params.cartItemId;
    const { quantity, subtotal_price } = req.body;

    // Validate input data
    if (!(quantity && subtotal_price)) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    // Find cart item by ID
    const cartItem = await Cart_item.findByPk(cartItemId);
    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    // Update cart item
    cartItem.quantity = quantity;
    cartItem.subtotal_price = subtotal_price;
    await cartItem.save();

    res.status(200).json(cartItem);
  } catch (error) {
    next(error);
  }
};

// Delete cart item
exports.deleteCartItem = async (req, res, next) => {
  try {
    const cartItemId = req.params.cartItemId;

    // Find cart item by ID
    const cartItem = await Cart_item.findByPk(cartItemId);
    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    // Delete cart item
    await cartItem.destroy();

    res.status(204).end(); // No content
  } catch (error) {
    next(error);
  }
};
