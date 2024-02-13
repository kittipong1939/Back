const db = require("../models/db");


exports.createCart = async (req, res, next) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'Please provide the user ID' });
    }

    // Check if the user exists
    const user = await db.user.findUnique({
      where: {
        id: userId
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Create the cart
    const cart = await db.cart.create({
      data: {
        userId
      }
    });

    res.status(201).json({ message: 'Cart created successfully', cart });
  } catch (error) {
    next(error);
  }
};

