const express = require('express');
const authRouter = express.Router();
const register = require('../Utils/Register');
const login = require('../Utils/Login');

authRouter.post('/register', async (req, res) => {
  const { username , email , password } = req.body;

  const result = await register(username, password , email);
  if (result.success) {
    res.status(201).json(result);
  } else {
    res.status(400).json(result);
  }
});

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const result = await login(email, password);
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(401).json(result);
  }
});

module.exports = authRouter;