import Site from '@/models/Site'
import dbConnect from '@/utils/dbConnect'

const saveWebhook = async (req, res) => {
  await dbConnect()
  const { id, type, webhook } = req.body

  try {
    const updatedWebhook = await Site.findOneAndUpdate(
      { name: type, group: id },
      { webhook },
      {
        new: true,
        upsert: true,
      }
    )
    res.status(200).json({ webhook: updatedWebhook, success: true })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message, success: false })
  }
}

export default saveWebhook
