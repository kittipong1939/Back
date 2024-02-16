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