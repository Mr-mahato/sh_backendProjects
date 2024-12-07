const express = require("express");
const app = express();
const morgan = require("morgan");
const { adminRouter } = require("./Routes/AdminRoutes");
const connectDb = require("./config/database");
app.use(morgan("dev"));
require("dotenv").config();
const PORT = process.env.PORT || 3000;

/// -------------> normal user access only these andpoints

// #TODO: /home must get all the blog form the server
// #TODO: /article/:number ---> should fetch only specific blog from the server


/// ---------> for admin

// #TODO: admin side

// #TODO: /admin be able to view the blog page
// #TODO: /edit/:article_no --> he should be able to edit that blog and then resave that blog in the database

// #TODO: /new should be able to create the new blog only by the admin


app.use(adminRouter);
app.listen(PORT, async (err) => {
  try {
    await connectDb();
    console.log(`Server started at http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
