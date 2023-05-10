import { sendError } from "h3"
import { getUserByEmailOrUsername } from "~/server/controllers/users"
import bcrypt from "bcrypt"
import { generateTokens } from "../../utils/jwt"
import { userTransformer } from "../../transformers/user"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { emailOrUsername, password } = body

  if (!emailOrUsername || !password) {
    console.log(password);
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Paramètres de connexion invalides !'
    }))
  }

  // Is the user registered
  const user = await getUserByEmailOrUsername(emailOrUsername)

  if (!user) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Email/Pseudo ou mot de passe invalides !'
    }))
  }

  // Compare passwords against
  const doesThePasswordMatch = await bcrypt.compare(password, user.password)

  // Generate Tokens
  // Access token
  // Refresh token
  const { accessToken, refreshToken } = generateTokens(user)

  return {
    access_Token: accessToken,
    user: userTransformer(user)
  }
})