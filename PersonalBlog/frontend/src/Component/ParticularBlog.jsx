import React, { useEffect, useState } from "react";
import { useBlogContext } from "@/Context/BlogContext";
import { useParams } from "react-router-dom";

function ParticularBlog() {
  const { blogCollection } = useBlogContext();
  const { blogId } = useParams();
  const wantToReadBlog = blogCollection.find((blog) => blog._id === blogId);

  return (
    <div className="my-10 min-h-screen  p-4  min-h-4xl">
      <div className=" bg-neutral-100 md:w-[60%]  rounded-lg border p-4">
        <h1 className="font-bold italic text-xl">
          {wantToReadBlog.articleTitle}
        </h1>

        <p className="mt-10 text-lg text-justify text-neutral-700 font-medium">
          {wantToReadBlog.articleContent}
        </p>
      </div>
    </div>
  );
}

export default ParticularBlog;
