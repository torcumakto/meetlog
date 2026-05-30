import mongoose from 'mongoose'

const ActionSchema = new mongoose.Schema({
  name:   { type: String, required: true },
  avatar: { type: String, default: '나' },
  due:    { type: String, default: '미정' },
  done:   { type: Boolean, default: false },
})

const MeetingSchema = new mongoose.Schema({
  title:    { type: String, required: true },
  date:     { type: String, default: '' },
  type:     { type: String, default: '스프린트 회의' },
  status:   { type: String, default: 'ing' },
  project:  { type: String, default: '' },
  att:      { type: String, default: '' },
  content:  { type: String, default: '' },
  dec:      { type: String, default: '' },
  next:     { type: String, default: '' },
  tags:     [String],
  actions:  [ActionSchema],
  aiSummaries: [{ text: String, keywords: [String], time: String }],
}, {
  timestamps: true
})

export default mongoose.models.Meeting || mongoose.model('Meeting', MeetingSchema)