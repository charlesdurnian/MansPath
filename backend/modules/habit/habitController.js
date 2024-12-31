const habitService = require('../habit/habitService');

// Get all pre-set habits
exports.getHabits = async (req, res) => {
  try {
    const habits = await habitService.getAllHabits();
    res.status(200).json(habits);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching habits', error: error.message });
  }
};

// Get habit details (for the "More Info" page)
exports.getHabitDetails = async (req, res) => {
  try {
    const { habitId } = req.params;
    const habit = await habitService.getHabitById(habitId);
    if (!habit) {
      return res.status(404).json({ message: 'Habit not found' });
    }
    res.status(200).json(habit);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching habit details', error: error.message });
  }
};

// Seed pre-set habits (only for admin setup)
exports.seedHabits = async (req, res) => {
  try {
    const message = await habitService.seedHabits();
    res.status(201).json({ message });
  } catch (error) {
    res.status(500).json({ message: 'Error seeding habits', error: error.message });
  }
};
