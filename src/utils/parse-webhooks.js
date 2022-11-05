const mongoose = require('mongoose')
import { parse } from 'cookie'
import { verify } from 'jsonwebtoken'
import { config } from './config'
import dbConnect from './dbConnect'
import Site from '@/models/Site'

export async function parseWebhooks(ctx, groupId) {
  try {
    await dbConnect()
    const webhooks = await Site.find({
      group: groupId,
    })
      .populate('group')
      .exec()

    const data = {}
    for (const webhookObject of webhooks) {
      const { name, webhook } = webhookObject
      data[name] = webhook
    }
    return data
  } catch (e) {
    console.log(e.message)
    return null
  }
}
