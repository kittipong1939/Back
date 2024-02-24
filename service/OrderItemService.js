const prisma = require("../config/prisma");

exports.createOrderItem = (cart_itemId) => {
    return prisma.order_item.create({
      data: {
        cart_itemId
      },
    });
  };

 
