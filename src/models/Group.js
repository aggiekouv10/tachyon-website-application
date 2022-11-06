const mongoose = require('mongoose')

const { Schema } = mongoose

const GroupSchema = new Schema(
  {
    name: String,
    embed: Object,
    activeCategories: Array,
    image: String,
    admins: Array,
  },
  { timestamps: true }
)

export default mongoose.models.Group || mongoose.model('Group', GroupSchema)
