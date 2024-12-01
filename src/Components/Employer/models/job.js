// models/Job.js
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Employer', required: true },
  location: String,
  salary: Number,
  requirements: [String],
});

module.exports = mongoose.model('Job', JobSchema);