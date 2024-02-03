const bcrypt = require('bcryptjs')
const {PrismaClient} = require("@prisma/client")
const prisma =  new PrismaClient()


const password = bcrypt.hashSync('123456')
const userData=[
    {username : 'andy', password ,email : 'andy@ggg.mail'},
    {username : 'bobby', password ,email : 'bobby@ggg.mail'},
    {username : 'candy', password ,email : 'candy@ggg.mail'},
]

const todoData = [
    {title : 'Learn Html ', duedate : new Date(), user_id : 1},
    {title : 'Learn CSS ', duedate : new Date(), user_id : 2},
    {title : 'Learn JS ', duedate : new Date(), user_id : 2},
    {title : 'Learn REACT ', duedate : new Date(), user_id : 3},
    {title : 'Learn REACT01 ', duedate : new Date(), user_id : 3},
]




const run = async () => {
    // await prisma.user.deleteMany({})
    // await prisma.user.deleteMany({})
 
    // prisma.$executeRaw`Drop database ccac01_connect`
    // prisma.$executeRaw`create database ccac01_connect`

    await prisma.todo.deleteMany({
        data : userData
    })
    await prisma.todo.createMany({
        data : todoData
    })
}

run()