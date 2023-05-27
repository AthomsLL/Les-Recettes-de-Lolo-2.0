import formidable from 'formidable'
import { createRecipe } from '../../../controllers/recipes'
import { createRecipeFile } from '../../../controllers/mediaFiles'
import { recipeTransformer } from "~/server/transformers/recipe"
import { uploadToCloudinary } from '~/server/utils/cloudinary'

export default defineEventHandler(async (event) => {
  const form = formidable({})

  const response = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if(err) {
        reject(err)
      }
      resolve({ fields, files })
    })
  })

  const { fields, files } = response
  
  const userId = event.context?.auth?.user?.id

  const recipeData = {
    title: fields.title,
    category: fields.category,
    difficulty: fields.difficulty,
    nbrPersons: fields.nbrPersons,
    preptime: fields.preptime,
    cooktime: fields.cooktime,
    ingredients: JSON.parse(fields.ingredients),
    steps: JSON.parse(fields.steps),
    userId: userId
  }

  const recipe = await createRecipe(recipeData)

  const recipeFilePromises = Object.keys(files).map(async key => {
    const config = useRuntimeConfig()

    const file = files[key]
    
    const response = await uploadToCloudinary(file.filepath, config.cloudinaryUploadFolderRecipes)

    console.log(response)

    return createRecipeFile({
      url: '',
      providerPublicId: 'random_id',
      userId: userId,
      recipeId: recipe.id
    })
  })

  await Promise.all(recipeFilePromises)

  return {
    recipe: recipeTransformer(recipe)
  }
})