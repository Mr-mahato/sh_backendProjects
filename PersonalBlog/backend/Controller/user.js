const blogModel = require("../Model/Blog");
const getPersonalBlog = async (req, res) => {
  try {
    console.log("beign called");
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

const getParticularBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await blogModel.findById(blogId);
    console.log(blog);

    res.status(200).json({
      status: 1,
      message: "Blog fetched",
      blog: blog,
    });
  } catch (error) {
    res.status(404).json({
      status: 0,
      message: "Blog fetching error 404",
    });
  }
};

module.exports = {
  getParticularBlog,
  getPersonalBlog,
};
