const jwt = require('jsonwebtoken');
const axios = require('axios');

// Middleware สำหรับตรวจสอบการรับรองตัวตนด้วย JWT
const authenticateJWT = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith('Bearer')) {
      throw new Error('Unauthorized');
    }
    const token = authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log(payload);

    // ในกรณีที่ต้องการใช้ข้อมูลผู้ใช้ใน middleware นี้
    // คุณสามารถเก็บข้อมูลผู้ใช้ไว้ใน req.user หรือตัวแปรอื่น ๆ ตามต้องการ

    // ส่งต่อคำขอไปยัง middleware หรือการดำเนินการถัดไป
    next();
  } catch (err) {
    next(err);
  }
};

// Middleware สำหรับการเรียก API ดึงข้อมูลผลิตภัณฑ์
const fetchProducts = async (req, res, next) => {
  try {
    // กำหนด header ที่มี Authorization Bearer token
    const headers = {
      Authorization: req.headers.authorization // ส่ง token ที่รับมาจาก middleware การตรวจสอบการรับรองตัวตน
    };

    // เรียก API `/auth/product` ด้วย Axios
    const response = await axios.get('http://localhost:8889/auth/product', { headers });

    // ดึงข้อมูลผลิตภัณฑ์จาก response
    const products = response.data;

    // ทำอะไรกับข้อมูลผลิตภัณฑ์ เช่น ส่งคืนให้กับ client หรือประมวลผลต่อ
    res.json(products);
  } catch (error) {
    // จัดการข้อผิดพลาดที่เกิดขึ้น
    next(error);
  }
};

module.exports = { authenticateJWT, fetchProducts };
