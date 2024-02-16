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
// Import Product model

exports.getProductById = async (req, res, next) => {
  const productId = req.params.productId; // รับค่า ID ของสินค้าจากพารามิเตอร์ของ URL

  try {
    // ค้นหาสินค้าตาม ID ที่ระบุ
    const product = await dbproduct.findByPk(productId);

    // ตรวจสอบว่าพบสินค้าหรือไม่
    if (product) {
      // หากพบสินค้า ส่งข้อมูลสินค้ากลับไป
      res.json(product);
    } else {
      // หากไม่พบสินค้า ส่งข้อความว่า "Product not found" กลับไป
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    // หากเกิดข้อผิดพลาดในการค้นหา
    next(error);
  }
};
