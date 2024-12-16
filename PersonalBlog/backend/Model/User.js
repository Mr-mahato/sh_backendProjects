const { mongoose } = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  username: {
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  blog: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
  ],
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
