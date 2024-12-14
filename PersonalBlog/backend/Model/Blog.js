const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  articleTitle: {
    type: String,
    require: true,
  },
  articleContent: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const blogModel = new mongoose.model("Blog", blogSchema);
module.exports = blogModel;
