const express = require("express");
const { getPersonalBlog } = require("../Controller/admin");

const adminRouter =  express.Router();

adminRouter.get('/admin',getPersonalBlog);

module.exports = {
    adminRouter
}