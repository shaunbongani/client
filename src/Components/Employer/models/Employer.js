// models/Employer.js
const mongoose = require('mongoose');

const EmployerSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  companyDescription: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Employer', EmployerSchema);