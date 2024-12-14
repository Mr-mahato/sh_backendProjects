const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL)
    console.log("Mongo db connected");
  } catch (error) {
    console.log("Error while connecting mongo db")
  }
};
module.exports = connectDb;

