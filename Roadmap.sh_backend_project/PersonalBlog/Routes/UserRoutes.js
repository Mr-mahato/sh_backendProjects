const express = require('express');
const userRouter = express.Router();
const {getParticularBlog} = require('../Controller/user');

userRouter.get('/user/getBlog/:blogId',getParticularBlog);

module.exports = {userRouter};