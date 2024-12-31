const Progress = require('../progress/progressModel');

// Get progress for a specific date
exports.getProgressByDate = async (userId, date) => {
  return await Progress.findOne({ userId, date }).populate('habitProgress.habitId');
};

// Update progress for a specific habit
exports.updateHabitProgress = async (userId, date, habitId, completed) => {
  let progress = await Progress.findOne({ userId, date });

  // If no progress exists for this date, create a new one
  if (!progress) {
    progress = new Progress({
      userId,
      date,
      habitProgress: [],
      perfectDay: { completed: false, currentStreak: 0, bestStreak: 0 },
    });
  }

  // Find or add the habit progress for this habit
  const habitIndex = progress.habitProgress.findIndex((h) => h.habitId.toString() === habitId);
  if (habitIndex === -1) {
    progress.habitProgress.push({
      habitId,
      completed,
      currentStreak: completed ? 1 : 0,
      bestStreak: completed ? 1 : 0,
    });
  } else {
    const habit = progress.habitProgress[habitIndex];

    if (completed) {
      // Increment streak if habit is completed
      habit.currentStreak += 1;
      habit.bestStreak = Math.max(habit.bestStreak, habit.currentStreak);
    } else {
      // Reset streak if habit is missed
      habit.currentStreak = 0;
    }

    habit.completed = completed;
  }

  // Check for "Perfect Day" status
  const allCompleted = progress.habitProgress.every((h) => h.completed);
  if (allCompleted) {
    progress.perfectDay.completed = true;
    progress.perfectDay.currentStreak += 1;
    progress.perfectDay.bestStreak = Math.max(
      progress.perfectDay.bestStreak,
      progress.perfectDay.currentStreak
    );
  } else {
    progress.perfectDay.completed = false;
    progress.perfectDay.currentStreak = 0; // Reset perfect day streak if not all are completed
  }

  // Save progress
  return await progress.save();
};

// Reset all streaks if a day is missed (run this daily as a cron job or upon user login)
exports.resetStreaksIfMissed = async (userId, todayDate) => {
  const yesterday = new Date(todayDate);
  yesterday.setDate(yesterday.getDate() - 1);
  const formattedYesterday = yesterday.toISOString().split('T')[0];

  // Check if there is progress for yesterday
  const yesterdayProgress = await Progress.findOne({ userId, date: formattedYesterday });

  if (!yesterdayProgress) {
    // If no progress for yesterday, reset streaks
    const habits = await Progress.find({ userId });
    habits.forEach((habit) => {
      habit.habitProgress.forEach((h) => {
        h.currentStreak = 0; // Reset current streak
      });
      habit.perfectDay.currentStreak = 0; // Reset perfect day streak
      habit.save();
    });
  }
};
