const prisma = require("../config/prisma");

exports.createCartItem = (quantity, cartId,productId) => {
    return prisma.cart_item.create({
      data: {
          quantity,
          cartId,
          productId
      },
    });
  };

 
