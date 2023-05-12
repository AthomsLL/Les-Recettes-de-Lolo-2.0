import UrlPattern from "url-pattern"
import { decodeAccessToken } from "../utils/jwt"
import { sendError } from "h3"
import { getUserById } from "../controllers/users"

export default defineEventHandler(async (event) => {
  const endpoints = [
    'api/auth/user'
  ]

  const isHandleByThisMiddleware = endpoints.some(endpoint => {
    const pattern = new UrlPattern(endpoint)

    return pattern.match(event.node.req.url)
  })

  if (!isHandleByThisMiddleware) {
    return
  }

  const token = event.node.req.headers['cookie'].split('refresh_token=')[1]

  const decoded = decodeAccessToken(token)

  console.log(decoded);

  if(!decoded) {
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    }))
  }


  try {
    const userId = decoded.userId

    const user = await getUserById(userId)

    event.context.auth = { user }
  } catch (error) {
    return error
  }
})