import { useBlogContext } from "@/Context/BlogContext";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { api } from "@/lib/utils";
function Admin() {
  const { blogCollection, deleteBlog } = useBlogContext();

  if (!blogCollection) return <h1> Loading...</h1>;

  const handleBlogDeletion = async (blogId) => {
    try {
      const responseBlogDeletion = await api.delete(
        `/admin/deleteBlog/${blogId}`
      );
      deleteBlog(blogId);
    } catch (error) {
      alert("something went wrong");
      console.error(error);
    }
  };
  const blogItems = blogCollection?.map((val, ind) => {
    return (
      <div key={ind} className="border p-2 rounded-md">
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
    <div className="mt-4 md:w-1/2 min-h-screen mx-auto border p-4">
      <div className="flex justify-between">
        <h1 className="text-lg italic">Personal Blog</h1>
        <Link
          to={"/new"}
          className="font-bold border p-1 rounded-md border-gray-200"
        >
          {" "}
          + Add
        </Link>
      </div>
      <div className="flex flex-col gap-2 mt-4">{blogItems}</div>
    </div>
  );
}

export default Admin;
