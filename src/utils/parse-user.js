import { parse } from 'cookie'
import { verify } from 'jsonwebtoken'
import { config } from './config'

export async function parseUser(ctx) {
    if (!ctx.req.headers.cookie) return null

    const token = parse(ctx.req.headers.cookie)[config.cookieName]

    if (!token) return null

    try {
        const { iat, exp, ...user } = verify(token, config.jwtSecret)

        return user
    } catch (e) {
        console.log(e.message)
        return null
    }
}