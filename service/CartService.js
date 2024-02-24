const prisma = require("../config/prisma");

exports.createCart = (total, userId) => {
    return prisma.cart.create({
      data: {
          total,
          userId
      },
    });
  };