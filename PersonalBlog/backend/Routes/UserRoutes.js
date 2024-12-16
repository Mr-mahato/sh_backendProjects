const express = require("express");
const userRouter = express.Router();
const { getParticularBlog } = require("../Controller/user");
const {getPersonalBlog,jepay} = require('../Controller/user')
// public routes can be access by normal user no need to login
userRouter.get("/getBlog/:blogId", getParticularBlog);
userRouter.get("/getBlog/",getPersonalBlog);
module.exports = { userRouter };
