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

    const user = await userModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const savedBlog = await newBlog.save();

    user.blog.push(savedBlog._id);
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

const getAllBlog = async (req, res) => {
  try {
    const { userId } = req.params;
    const userData = await userModel.findById({ _id: userId }).populate("blog");
    res.status(200).json({
      message: "blog fetched successfully",
      blogData: userData.blog,
    });
  } catch (error) {    
    res.status(400).json({
      message: "Error occur",
      error
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
  getAllBlog,
  editParticularBlog,
};
