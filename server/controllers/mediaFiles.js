import { prisma } from "../db"

export const createRecipeFile = (mediaFile) => {
  return prisma.recipeFile.create({
    data: mediaFile
  })
}

export const createAvatarFile = (mediaFile) => {
  return prisma.avatarFile.create({
    data: mediaFile
  })
}