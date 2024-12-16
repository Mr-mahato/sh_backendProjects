const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { adminRouter } = require("./Routes/AdminRoutes");
const connectDb = require("./config/database");
const { userRouter } = require("./Routes/UserRoutes");
const authRouter = require("./Routes/Auth");
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use("/v1/api/user", userRouter);
app.use("/v1/api/admin", adminRouter);
app.use("/v1/api/auth",authRouter);
app.listen(PORT, async (err) => {
  try {
    await connectDb();
    console.log(`Server started at http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
