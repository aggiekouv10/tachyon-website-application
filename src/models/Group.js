const mongoose = require('mongoose')

const { Schema } = mongoose

const GroupSchema = new Schema(
  {
    name: String,
    embed: Object,
    isActive: Boolean,
    image: String,
    admins: Array,
  },
  { timestamps: true }
)

export default mongoose.models.Group || mongoose.model('Group', GroupSchema)
