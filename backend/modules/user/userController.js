const userService = require('../user/userService');

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user exists
    const existingUser = await userService.findUserByEmail(email);
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Create new user
    const newUser = await userService.createUser({ username, email, password });
    res.status(201).json({ userId: newUser._id });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
