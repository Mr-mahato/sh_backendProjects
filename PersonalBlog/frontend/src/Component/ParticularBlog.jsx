import React, { useEffect, useState } from "react";
import { useBlogContext } from "@/Context/BlogContext";
import { useParams } from "react-router-dom";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

function ParticularBlog() {
  const { blogCollection } = useBlogContext();
  const { blogId } = useParams();
  console.log(blogCollection);
  const wantToReadBlog = blogCollection.find((blog) => blog._id === blogId);
  console.log(wantToReadBlog);

  const renderContent = () => {
    if (!wantToReadBlog) return null;
    const converter = new QuillDeltaToHtmlConverter(
      wantToReadBlog.articleContent,
      {}
    );
    const html = converter.convert();
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <div className="my-10 min-h-screen  p-4  min-h-4xl">
      {/* <div className=" bg-neutral-100 md:w-[60%]  rounded-lg border p-4">
        <h1 className="font-bold italic text-xl">
          {wantToReadBlog.articleTitle}
        </h1>

        <p className="mt-10 text-lg text-justify text-neutral-700 font-medium">
          {wantToReadBlog.articleContent}
        </p>
      </div> */}

      <div className="bg-neutral-50 md:w-[60%]  rounded-lg border p-4">
        <h1 className="text-neutral-900 font-semibold text-3xl">{wantToReadBlog.articleTitle}</h1>
        <h1 className="text-neutral-500 text-lg">{wantToReadBlog.articleSubTitle}</h1>
        <div className="border shadow p-4 mt-4">{renderContent()}</div>
      </div>
    </div>
  );
}

export default ParticularBlog;
