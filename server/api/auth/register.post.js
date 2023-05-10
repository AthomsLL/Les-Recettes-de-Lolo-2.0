import { sendError } from "h3"
import { createUser } from "../../controllers/users"
import { userTransformer } from "../../transformers/user"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { email, password, repeatPassword, name, username } = body

  if (!email || !password || !repeatPassword || !name || !username) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: "Une des informations est manquante ou invalide !"
    }))
  }

  if (password !== repeatPassword) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: "Les mots de passe ne correspondent pas !"
    }))
  }

  const userData = {
    email,
    password,
    name,
    username
  }

  const user = await createUser(userData)

  return {
    body: userTransformer(user)
  }
})