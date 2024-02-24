const prisma = require("../config/prisma");

exports.createOrderItem = (dueDate,userId,cartId) => {
    return prisma.order.create({
      data: {
        dueDate,
        userId,
        cartId
      },
    });
  };

 
