import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBlogContext } from "@/Context/BlogContext";
import { useAuth } from "@/Context/AuthContext";
import axios from "axios";
function Blog({ isHome }) {
  console.log(isHome);
  const { user } = useAuth();
  // const blogs = (isHome)? useBlogContext() : null;
  // const [allBlog, setAllBlog] = useState(null);
  const { blogCollection , adminBlogs, setAdminBlogs } = useBlogContext();

  useEffect(() => {
    if (!isHome) {
      const fetchBlogs = async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:3001/v1/api/admin/getAllBlog/${user._id}`,
            {
              headers: {
                Authorization: `Bearer ${JSON.parse(
                  localStorage.getItem("blogToken")
                )}`,
              },
            }
          );
          console.log(data);
          setAdminBlogs(data.blogData);
        } catch (error) {
          console.error("Error fetching blogs:", error);
        }
      };

      fetchBlogs();
    }
  }, [isHome]);

  const blogs = isHome ? blogCollection : adminBlogs;
  if (!blogs) return <h1>Loading......</h1>;

  const blogItems = blogs?.map((val, ind) => {
    return (
      <div key={ind} className="border p-2 rounded-md">
        <Link to={`/home/blog/${val._id}`} className="flex justify-between">
          <h1 className="text-2xl font-semibold capitalize">
            {val.articleTitle}
          </h1>
          <p className="italic text-lg">
            {new Date(val.createdAt).toLocaleDateString()}
          </p>
        </Link>
        <p className="font-thin line-clamp-2">{val.articleSubTitle}</p>
      </div>
    );
  });

  return (
    <div className="mt-4 md:w-1/2 min-h-screen">
        <div className="flex flex-col justify-between  gap-2">
          {blogItems}
        </div>
    </div>
  );
}

export default Blog;
