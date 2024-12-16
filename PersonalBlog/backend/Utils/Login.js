
const userModel  = require('../Model/User')
const bcrypt = require('bcrypt');
const {generateToken , verifyToken} = require('../Utils/jwt')

const login = async (email, password) => {
  try {
    // Find the user by username
    const user = await userModel.findOne({ email });
    if (!user) {
      return { success: false, message: 'User not found' };
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { success: false, message: 'Invalid password' };
    }

    const token = generateToken(user._id , user.username);

    // User found and password matches
    return { success: true, message: 'User found', user , token };
  } catch (error) {
    console.error('Error during login:', error);
    return { success: false, message: 'An error occurred during login' };
  }
};

module.exports = login;