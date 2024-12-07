const getPersonalBlog = (req, res) => {
  //  well i am fetching
  res.status(200).json({
    message: "These are the blog which is to be send to the end user",
  });
};

const addPersonalBlog = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
  getPersonalBlog,
  addPersonalBlog
};
