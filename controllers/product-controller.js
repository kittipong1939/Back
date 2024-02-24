const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const db = require("../models/db");
const ProductService = require("../service/productService");

exports.getProduct = async (req, res, next) => {
  try {
      const getproduct = await db.product.findMany()
      res.json(getproduct)

  } catch (error) {
      next(error)
  }
}

exports.getProductById = async (req, res, next) => {
  try {
      const { id } = req.params
      const getProduct = await ProductService.getProductById(id)
      res.json(getProduct)

  } catch (error) {
      next(error)
  }
}


exports.createProduct = async (req, res, next) => {
  const { name, img, description, price, categoryId } = req.body

  try {
      const product = await ProductService.createProduct(name, img, description, price,  categoryId)
      res.json(product)

  } catch (error) {
      next(error)
  }
}

exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const rs = await db.product.delete({
      where: { id: +id } // ใช้เฉพาะ id เท่านั้น
    });
    res.json({ msg: 'Delete ok', result: rs });
  } catch (err) {
    next(err);
  }
};
exports.updateProduct = async (req, res, next) => {
  // validate req.params + req.body
  const {id} = req.params
  const data = req.body
  try {
    const rs = await db.product.update({
      data :  {...data},
       where: { id:+id} 
    })
    res.json({msg:'Update ok',result:rs})
  }catch(err){
    next(err)
  }
}

