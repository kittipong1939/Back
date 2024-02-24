require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/error')
const authRoute = require('./routes/auth-route')
const todoRoute = require('./routes/todo-route')
const productRoute = require('./routes/product-route');
const cartRoute = require('./routes/cart-route');
const cartitemRoute = require('./routes/cart-item-route');
const orderRoute = require('./routes/orderItem-route');
const orderRoute1 = require('./routes/order-route');
const app = express()

app.use(cors())
app.use(express.json())

// service
app.use('/auth', authRoute)
app.use('/todos', todoRoute)
app.use('/product', productRoute)
app.use('/cart', cartRoute)
app.use('/cartitem', cartitemRoute)
app.use('/orderItem', orderRoute)
app.use('/order', orderRoute1)
// notFound
app.use( notFound )

// error
app.use(errorMiddleware)

let port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on Port :', port))