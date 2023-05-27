export const recipeTransformer = (recipe) => {
  return {
    id: recipe.id,
    title: recipe.title,
    category: recipe.category,
    difficulty: recipe.difficulty,
    rating: recipe.rating,
    usersLiked: recipe.usersLiked,
    nbrPersons: recipe.nbrPersons,
    preptime: recipe.preptime,
    cooktime: recipe.cooktime,
    ingredients: recipe.ingredients,
    steps: recipe.steps
  }
}