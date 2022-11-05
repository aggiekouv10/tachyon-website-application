const mongoose = require('mongoose')
import Group from '@/models/Group'
import dbConnect from '@/utils/dbConnect'

const updateEmbedSettings = async (req, res) => {
  await dbConnect()
  const { id, color, image, footer } = req.body

  const group = await Group.findById({ _id: id })

  if (!group)
    return res.status(404).json({ message: 'Group not found', success: false })

  try {
    const updatedGroup = await Group.findByIdAndUpdate(
      { _id: id },
      { embed: { color, image, footer } },
      {
        new: true,
      }
    )

    const [groupId, name, newImage, embed] = [
      updatedGroup._id.toString(),
      updatedGroup.name,
      updatedGroup.image,
      updatedGroup.embed,
    ]
    res
      .status(200)
      .json({ group: { groupId, name, image: newImage, embed }, success: true })
  } catch (error) {
    res.status(400).json({ message: error.message, success: false })
  }
}

export default updateEmbedSettings
