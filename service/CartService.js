const prisma = require("../config/prisma");

exports.createCart = (total, userId) => {
    return prisma.cart.create({
      data: {
          total,
          userId
      },
    });
  };

exports.getCart = (userId) => {
  return prisma.cart.findFirst({
    where: {
      userId,
      status: 'WAITING'
    }
  })
}
