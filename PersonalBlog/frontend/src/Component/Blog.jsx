import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBlogContext } from "@/Context/BlogContext";
function Blog() {
  // const [allBlog, setAllBlog] = useState(null);
  const {blogCollection } = useBlogContext();
 if(!blogCollection) return <h1>Loading......</h1>
  const blogItems = blogCollection?.map((val, ind) => {
    return (
      <div key={ind} className="border p-2 rounded-md">
        <Link to={`/blog/${val._id}`} className="flex justify-between">
          <h1 className="text-2xl font-semibold capitalize">
            {val.articleTitle}
          </h1>
          <p className="italic text-lg">
            {new Date(val.createdAt).toLocaleDateString()}
          </p>
        </Link>
        <p className="font-thin line-clamp-2">{val.articleContent}</p>
      </div>
    );
  });

  return (
    <div className="mt-4 md:w-1/2 min-h-screen">
      <div className="flex flex-col gap-2">{blogItems}</div>
    </div>
  );
}

export default Blog;

