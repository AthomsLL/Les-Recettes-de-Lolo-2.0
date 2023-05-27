import { prisma } from "../db"

export const createRecipe = (recipeData) => {
  return prisma.recipe.create({
    data: recipeData
  })
}