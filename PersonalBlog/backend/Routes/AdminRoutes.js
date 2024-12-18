const express = require("express");
const {  addPersonalBlog, deleteParticularBlog, getAllBlog ,  editParticularBlog } = require("../Controller/admin");
const authMiddleware = require("../Middleware/authMiddleware");

const adminRouter = express.Router();

adminRouter.use(authMiddleware);

adminRouter.post("/addblog", addPersonalBlog);
adminRouter.get("/getAllBlog/:userId",getAllBlog);
adminRouter.delete("/deleteBlog/:blogId",deleteParticularBlog);
adminRouter.patch("/editBlog/:blogId",editParticularBlog);

module.exports = {
  adminRouter,
};
