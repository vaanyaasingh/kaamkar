// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const matchingRoutes = require('./routes/matching');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Job Schema
const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  isHourly: { type: Boolean, default: false },
  hourlyRateLow: { 
    type: Number,
    get: v => v * 83, // Converting USD to INR (approximate)
    set: v => v / 83
  },
  hourlyRateHigh: {
    type: Number,
    get: v => v * 83, // Converting USD to INR (approximate)
    set: v => v / 83
  },
  budget: {
    type: Number,
    get: v => v * 83, // Converting USD to INR (approximate)
    set: v => v / 83
  },
  country: String,
  publishedDate: { type: Date, default: Date.now },
  skills: [String],
  experienceLevel: String
});

const Job = mongoose.model('Job', jobSchema);

// Basic job routes
app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/jobs', async (req, res) => {
  try {
    const job = new Job(req.body);
    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Use matching routes
app.use(matchingRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;