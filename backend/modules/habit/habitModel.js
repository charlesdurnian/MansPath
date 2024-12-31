const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Habit name (e.g., "Exercise")
  description: { type: String, required: true }, // Description for the "More Info" page
  createdAt: { type: Date, default: Date.now }, // Timestamp
});

module.exports = mongoose.model('Habit', habitSchema);
