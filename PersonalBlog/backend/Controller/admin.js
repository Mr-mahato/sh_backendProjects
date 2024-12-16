const blogModel = require("../Model/Blog");
const userModel = require("../Model/User");

const addPersonalBlog = async (req, res) => {
  try {
    let { ops, articleTitle, articleSubTitle } = req.body;

    const newBlog = new blogModel({
      articleContent: ops,
      articleTitle,
      articleSubTitle,
    });

    const savedBlog = await newBlog.save();
    const user = await userModel.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Add the blog ID to the user's blogs array
    user.blog.push(savedBlog._id); // Assuming `blogs` is an array in userSchema
    await user.save();
    res.status(200).json({
      message: "blog created successfully",
      blogData: savedBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error occur",
    });
  }
};

const deleteParticularBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const deletedBlog = await blogModel.findByIdAndDelete(blogId);
    res.status(200).json({
      message: "blog deleted successfully",
      blogId: deletedBlog._id,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: 0,
      message: "blog not found",
    });
  }
};

const editParticularBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const updatedBlog = await blogModel.findByIdAndUpdate(blogId, req.body, {
      new: true,
    });
    console.log(updatedBlog);
    res.status(200).json({
      message: "blog updated successfully",
      blog: updatedBlog,
    });
  } catch (error) {
    console.log(error);

    res.status(404).json({
      status: 0,
      message: "blog not found",
    });
  }
};

module.exports = {
  addPersonalBlog,
  deleteParticularBlog,
  editParticularBlog,
};
