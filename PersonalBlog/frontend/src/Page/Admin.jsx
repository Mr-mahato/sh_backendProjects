import { useBlogContext } from "@/Context/BlogContext";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { api } from "@/lib/utils";
import { useAuth } from "@/Context/AuthContext";
import { SkeletonLoader } from "@/Loaders/SekletonLoader";
function Admin() {
  const { blogCollection, deleteBlog, adminBlogs, setAdminBlogs } =
    useBlogContext();
  console.log(adminBlogs);
  const { user } = useAuth();
  if (!adminBlogs)
    return (
      <div className="md:w-[60%] mx-auto">
        <SkeletonLoader />
      </div>
    );

  const handleBlogDeletion = async (blogId) => {
    try {
      const responseBlogDeletion = await axios.delete(
        `http://localhost:3001/v1/api/admin/deleteBlog/${blogId}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("blogToken")
            )}`,
          },
        }
      );
      deleteBlog(blogId);
      setAdminBlogs((prev) => prev.filter((val) => val._id != blogId));
      console.log(responseBlogDeletion);
    } catch (error) {
      // alert("something went wrong");
      console.error(error);
    }
  };
  const blogItems = adminBlogs?.map((val, ind) => {
    return (
      <div key={ind} className="border w-[80%] p-2 rounded-md">
        <div className="flex justify-between">
          <h1 className="md:text-2xl text-xl font-semibold capitalize">
            {val.articleTitle}
          </h1>
          <div className="flex justify-between items-center gap-2">
            <Link
              to={`edit/${val._id}`}
              className="bg-neutral-200 px-3 rounded-md py-1"
            >
              Edit
            </Link>
            <button
              onClick={() => handleBlogDeletion(val._id)}
              className="bg-red-200 active:bg-red-400 px-3 rounded-md py-1"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="mt-4 md:w-[60%] min-h-screen mx-auto  p-4">
      <div className="border p-4 rounded-md">
        <div className="flex justify-between">
          <h1 className="text-lg italic">Personal Blog</h1>
        </div>
        <div className="flex flex-col gap-2 mt-4">{blogItems}</div>
      </div>
    </div>
  );
}

export default Admin;
