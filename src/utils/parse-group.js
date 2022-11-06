import { parse } from 'cookie'
import { verify } from 'jsonwebtoken'
import { config } from './config'
import dbConnect from './dbConnect'
import Group from '@/models/Group'

export async function parseGroup(ctx) {
  if (!ctx.req.headers.cookie) return null

  const token = parse(ctx.req.headers.cookie)[config.cookieName]

  if (!token) return null

  try {
    const { iat, exp, ...user } = verify(token, config.jwtSecret)

    const { id } = user
    await dbConnect()
    const data = await Group.findOne({ admins: id }).exec()
    if (data === null || data.activeCategories.length === 0) return null
    const [groupId, name, image, embed, activeCategories] = [
      data._id.toString(),
      data.name,
      data.image,
      data.embed,
      data.activeCategories
    ]
    return { groupId, name, image, embed, activeCategories }
  } catch (e) {
    console.log(e.message)
    return null
  }
}
