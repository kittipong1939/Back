const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// module.exports = {
//   prisma,
//   user: prisma.user,
//   product: prisma.product,
// // อัพเดทเป็น purchase แทนการใช้ prisma.purchase
// };
module.exports = prisma