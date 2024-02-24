const prisma = require("../config/prisma");

exports.getProductById = (id) => {
  return prisma.product.findFirst({
    where: {
      id: Number(id),
    },
  });
};

exports.getUserById = (email) => {
  return prisma.product.findFirst({
    where: {
      email,
    },
  });
};

exports.createProduct = (name, img , description, price, categoryId) => {
  return prisma.product.create({
    data: {
        name,
        img ,
        description,
        price,
        categoryId
    },
  });
};
