const userModel = require('../Model/User')
const bcrypt = require('bcrypt');
const {generateToken , verifyToken} = require('../Utils/jwt')

const register = async (username, password , email) => {
  try {
    // Check if the username already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return { success: false, message: 'user already exist' };
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });
``
    // Save the user to the database
    const savedUser = await newUser.save();
    const token = generateToken(savedUser._id,username);
    return { success: true, message: 'User registered successfully', user: savedUser , token };
  } catch (error) {
    console.error('Error during registration:', error);
    return { success: false, message: 'An error occurred during registration' };
  }
};

module.exports = register;