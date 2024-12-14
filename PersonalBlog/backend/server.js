const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { adminRouter } = require("./Routes/AdminRoutes");
const connectDb = require("./config/database");
const { userRouter } = require("./Routes/UserRoutes");
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use("/v1/api/", adminRouter);
app.use("/v1/api", userRouter);
app.listen(PORT, async (err) => {
  try {
    await connectDb();
    console.log(`Server started at http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
