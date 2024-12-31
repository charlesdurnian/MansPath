const Habit = require('../habit/habitModel');

// Fetch all pre-set habits
exports.getAllHabits = async () => {
  return await Habit.find();
};

// Fetch a single habit by ID
exports.getHabitById = async (habitId) => {
  return await Habit.findById(habitId);
};

// Seed pre-set habits into the database (run once)
exports.seedHabits = async () => {
  const preSetHabits = [
    { name: 'Exercise', description: 'Daily exercise for at least 30 minutes.' },
    { name: 'Carnivore', description: 'Follow a carnivore or animal-based diet for the day.' },
    { name: 'Create', description: 'Create something new every day, such as art, writing, or coding.' },
    { name: 'Read', description: 'Read at least 10 pages or for 20 minutes every day.' },
    { name: 'Journal', description: 'Reflect and write in your journal every day.' },
  ];

  // Insert only if the habits don't already exist
  for (const habit of preSetHabits) {
    const exists = await Habit.findOne({ name: habit.name });
    if (!exists) {
      await Habit.create(habit);
    }
  }
  return 'Habits seeded successfully!';
};
