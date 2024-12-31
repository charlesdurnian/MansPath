const User = require('../user/userModel');

// Find user by email
exports.findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

// Create a new user
exports.createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};
