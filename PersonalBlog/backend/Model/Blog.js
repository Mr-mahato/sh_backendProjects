const mongoose = require("mongoose");
const { Schema } = mongoose;

const deltaSchema = new Schema(
  {
    insert: {
      type: Schema.Types.Mixed,
      required: true,
    },
    attributes: {
      type: Schema.Types.Mixed,
      required: false,
    },
  },
  { _id: false }
);

const blogSchema = new Schema({
  articleTitle:String,
  articleSubTitle:String,
  articleContent:[deltaSchema],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const blogModel =  mongoose.model("Blog", blogSchema);
module.exports = blogModel;
