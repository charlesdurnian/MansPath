const progressService = require('../progress/progressService');

// Get progress for a specific date
exports.getProgress = async (req, res) => {
  try {
    const { date } = req.query; // Pass date as a query parameter
    const progress = await progressService.getProgressByDate(req.user.id, date);
    res.status(200).json(progress || { message: 'No progress for this date yet.' });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching progress', error: error.message });
  }
};

// Update progress for a habit
exports.updateProgress = async (req, res) => {
  try {
    const { date, habitId, completed } = req.body; // Date, habitId, and completion status from the request body
    const progress = await progressService.updateHabitProgress(req.user.id, date, habitId, completed);
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ message: 'Error updating progress', error: error.message });
  }
};

// Reset streaks if a day is missed
exports.resetStreaks = async (req, res) => {
  try {
    const { todayDate } = req.body; // Today's date from the request body
    await progressService.resetStreaksIfMissed(req.user.id, todayDate);
    res.status(200).json({ message: 'Streaks checked and updated.' });
  } catch (error) {
    res.status(500).json({ message: 'Error resetting streaks', error: error.message });
  }
};
