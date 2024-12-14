import React, { useEffect, useState } from "react";
import { useBlogContext } from "@/Context/BlogContext";
import { useParams } from "react-router-dom";
import axios from "axios";


function ParticularBlog() {
  const { blogCollection } = useBlogContext();
  const { blogId } = useParams();
  const wantToReadBlog = blogCollection.find((blog) => blog._id === blogId);


  return (
    <div className="border ml-4 my-10 min-h-screen rounded-lg p-4 bg-neutral-100 max-w-5xl min-h-4xl">
      <div>
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
