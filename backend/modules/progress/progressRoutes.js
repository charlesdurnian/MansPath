const express = require('express');
const progressController = require('../progress/progressController');
const { protect } = require('../../middleware/authMiddleware'); // Authentication middleware
const router = express.Router();

router.get('/', protect, progressController.getProgress); // Get progress for a date
router.post('/', protect, progressController.updateProgress); // Update progress for a habit
router.post('/reset', protect, progressController.resetStreaks); // Reset streaks if missed

module.exports = router;
