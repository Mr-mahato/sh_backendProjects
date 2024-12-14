const blogModel = require("../Model/Blog");

const getPersonalBlog = async (req, res) => {
  try {
    console.log("beign called")
    const blogCollection = await blogModel.find({});
    res.status(200).json({
      status: 1,
      message: "Blog fetched",
      blog: blogCollection,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: 0,
      message: "Blog fetching error 404",
    });
  }
};

const addPersonalBlog = async (req, res) => {
  try {
    const newBlog = req.body;
    const nb = await blogModel(newBlog);
    await nb.save();
    console.log(nb);
    console.log(newBlog);
    res.status(200).json({
      message: "blog created successfully",
      blogData:nb
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
  getPersonalBlog,
  addPersonalBlog,
  deleteParticularBlog,
  editParticularBlog,
};
