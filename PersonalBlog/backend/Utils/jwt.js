const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.JWT_SECRET;
// Function to generate a JWT
const generateToken = (user) => {
  const payload = {
    id: user._id,
    username: user.username,
  };

  const options = {
    expiresIn: '1h', 
  };

  return jwt.sign(payload, secretKey, options);
};

// Function to verify a JWT
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return { valid: true, decoded };
  } catch (error) {
    return { valid: false, error };
  }
};

module.exports = {
  generateToken,
  verifyToken,
};