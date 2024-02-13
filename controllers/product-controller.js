const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const db = require("../models/db");

exports.getCategories = async (req, res, next) => {
    try {
      const categories = await db.category.findMany();
      res.json(categories);
    } catch (error) {
      next(error);
    }
};
exports.getProduct = async (req, res, next) => {
  try {
    const products = await db.product.findMany();
    res.json(products);
  } catch (error) {
    next(error);
  }
};
exports.getCart1 = async (req, res, next) => {
  try {
    const carts = await db.cart.findMany();
    res.json(carts);
  } catch (error) {
    next(error);
  }
};
exports.getCartItem1 = async (req, res, next) => {
  try {
    const carts1 = await db.cart_item.findMany();
    res.json(carts1);
  } catch (error) {
    next(error);
  }
};
