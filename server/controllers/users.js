import { prisma } from "../db"
import bcrypt from "bcrypt"

export const createUser = (userData) => {
  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10)
  }
  
  return prisma.user.create({
    data: finalUserData
  })
}

export const getUserByEmailOrUsername = (emailOrUsername) => {
  return prisma.user.findFirst({
    where: {
      OR: [
        { "email": emailOrUsername },
        { "username": emailOrUsername }
      ]
    }
  })
}

export const getUserById = (userId) => {
  return prisma.user.findUnique({
    where: {
      id: userId
    }
  })
}