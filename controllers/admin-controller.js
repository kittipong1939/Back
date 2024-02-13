const db = require("../models/db");


exports.createCategory = async (req, res, next) => {
    try {
      const { category_name } = req.body;
      
      // Validation
      if (!category_name) {
        return next(new Error("Please provide the category name"));
      }
  
      const category = await db.category.create({
        data: {
          category_name,
        },
      });
  
      res.json({ msg: 'Category created successfully', category });
    } catch (error) {
      next(error);
    }
  };
  exports.createProduct = async (req, res, next) => {
    try {
      const { title, description, price_product, stock_of_product, categoryId } = req.body;
      
      // Validation
      if (!(title && description && price_product && stock_of_product && categoryId)) {
        return next(new Error("Please provide all required fields"));
      }
  
      const product = await db.product.create({
        data: {
          title,
          description,
          price_product,
          stock_of_product,
          categoryId
        }
      });
  
      res.json({ msg: 'Product created successfully', product });
    } catch (error) {
      next(error);
    }
  };
