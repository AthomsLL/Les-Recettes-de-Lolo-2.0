import { sendError } from "h3"
import { getUserByEmailOrUsername } from "~/server/controllers/users"
import { createRefreshToken, sendRefreshToken } from "~/server/controllers/refreshTokens"
import bcrypt from "bcrypt"
import { generateTokens } from "../../utils/jwt"
import { userTransformer } from "../../transformers/user"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { emailOrUsername, password } = body

  if (!emailOrUsername || !password) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Paramètres de connexion invalides !'
    }))
  }

  const user = await getUserByEmailOrUsername(emailOrUsername)

  if (!user) {
    return sendError(event, createError({
      statusCode: 404,
      statusMessage: 'Email/Pseudo inconnu !'
    }))
  }

  const doesThePasswordMatch = await bcrypt.compare(password, user.password)

  if (!doesThePasswordMatch) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Email/Pseudo ou mot de passe invalides !'
    }))
  }

  const { accessToken, refreshToken } = generateTokens(user)

  await createRefreshToken({
    token: refreshToken,
    userId: user.id
  })

  sendRefreshToken(event, refreshToken)

  return {
    access_token: accessToken,
    user: userTransformer(user)
  }
})