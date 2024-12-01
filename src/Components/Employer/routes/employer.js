// routes/employers.js
const express = require('express');
const router = express.Router();
const Employer = require('../models/Employer');

// Create a new employer
router.post('/', async (req, res) => {
  try {
    const newEmployer = new Employer(req.body);
    const savedEmployer = await newEmployer.save();
    res.status(201).json(savedEmployer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all employers
router.get('/', async (req, res) => {
  try {
    const employers = await Employer.find();
    res.json(employers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;