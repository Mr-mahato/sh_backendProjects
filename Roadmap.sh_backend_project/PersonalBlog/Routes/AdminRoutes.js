const express = require("express");
const { getPersonalBlog, addPersonalBlog, deleteParticularBlog, editParticularBlog } = require("../Controller/admin");

const adminRouter = express.Router();

adminRouter.get("/admin/getBlog", getPersonalBlog);
adminRouter.post("/admin/addblog", addPersonalBlog);
adminRouter.delete("/admin/deleteBlog/:blogId",deleteParticularBlog);
adminRouter.patch("/admin/editBlog/:blogId",editParticularBlog);
module.exports = {
  adminRouter,
};
