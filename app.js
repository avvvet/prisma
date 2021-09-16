const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const getUsers = async () => {
    const users = await prisma.users.findMany()
    console.log('hello prisma ', users)
}

getUsers()
