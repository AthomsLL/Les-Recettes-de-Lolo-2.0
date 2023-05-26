import formidable from 'formidable'

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
  console.log(fields);
  
  const userId = event.context?.auth?.user?.id

  const recipeData = {
    title: fields.title,
    category: fields.category,
    difficulty: fields.difficulty,
    nbrPersons: fields.nbrPersons,
    preptime: fields.preptime,
    cooktime: fields.cooktime,
    ingredients: fields.ingredients,
    steps: fields.steps,
    userId: userId
  }

  //createRecipe(recipeData)


  return {
    recipeData: recipeData
  }
})