// create a mongoose schema for Group containing the following fields:
// - name: String
// - group: Reference to Group
// - webhook: String
// generate

const mongoose = require('mongoose')

const { Schema } = mongoose

const SiteSchema = new Schema(
  {
    name: String,
    group: { type: Schema.Types.ObjectId, ref: 'Group' },
    webhook: String,
  },
  { timestamps: true }
)

export default mongoose.models.Site || mongoose.model('Site', SiteSchema)
