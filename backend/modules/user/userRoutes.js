const express = require('express');
const userController = require('../user/userController');
const router = express.Router();

// User registration route
router.post('/register', userController.registerUser);

module.exports = router;
