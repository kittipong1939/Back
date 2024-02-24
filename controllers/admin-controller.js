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
          category_name
        },
      });
  
      res.json({ msg: 'Category created successfully', category });
    } catch (error) {
      next(error);
    }
  };
  
exports.getCategories = async (req, res, next) => {
    try {
      const categories = await db.category.findMany();
      res.json(categories);
    } catch (error) {
      next(error);
    }
};