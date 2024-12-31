const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true }, // Format: YYYY-MM-DD
  habitProgress: [
    {
      habitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Habit', required: true },
      completed: { type: Boolean, default: false },
      currentStreak: { type: Number, default: 0 }, // Current streak for the habit
      bestStreak: { type: Number, default: 0 }, // Best streak for the habit
    },
  ],
  perfectDay: {
    completed: { type: Boolean, default: false },
    currentStreak: { type: Number, default: 0 }, // Current streak for Perfect Days
    bestStreak: { type: Number, default: 0 }, // Best streak for Perfect Days
  },
});

module.exports = mongoose.model('Progress', progressSchema);
