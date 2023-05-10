import { prisma } from "../db"

export const createRefreshToken = (refreshToken) => {
  return prisma.refreshToken.create({
    data: refreshToken
  })
}