const express = require('express');
const habitController = require('../habit/habitController');
const { protect } = require('../../middleware/authMiddleware'); // Authentication middleware
const router = express.Router();

router.get('/', habitController.getHabits); // Get all pre-set habits
router.get('/:habitId', habitController.getHabitDetails); // Get habit details
router.post('/seed', habitController.seedHabits); // Seed pre-set habits (admin-only)

module.exports = router;
