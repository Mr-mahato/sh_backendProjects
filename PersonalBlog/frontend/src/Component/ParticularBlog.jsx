import React, { useEffect, useState } from "react";
import { useBlogContext } from "@/Context/BlogContext";
import { useParams } from "react-router-dom";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import DOMPurify from "dompurify";
import { BookOpen } from "lucide-react";
import "quill/dist/quill.snow.css";
import "@/styles.css";
// #TODO:make here a api request to backend to get particular blog.
function ParticularBlog() {
  const { blogCollection } = useBlogContext();
  const { slug } = useParams();
  const wantToReadBlog = blogCollection.find((blog) => blog.slug === slug);
  console.log(wantToReadBlog);

  const date = new Date(wantToReadBlog.createdAt);
  const options = { month: 'short', day: '2-digit', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options).replace(',', '-');

  const renderContent = () => {
    if (!wantToReadBlog) return null;

    const converter = new QuillDeltaToHtmlConverter(
      wantToReadBlog.articleContent,
      {}
    );
    const html = converter.convert();
    const sanitizedHtml = DOMPurify.sanitize(html); // Sanitize the HTML content

    return (
      <div
        className="ql-editor"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    );
  };

  return (
    <div className="my-10 w-[90%] mx-auto min-h-screen  p-4  min-h-4xl">
      <div className="bg-neutral-50 md:w-[60%]  rounded-lg border p-4">
        <div className="flex  gap-4 items-center text-neutral-500 text-sm">
          <h1 className="text-neutral-900 font-semibold text-2xl capitalize ">
            {wantToReadBlog.articleTitle}
          </h1>
         {formattedDate}
          <div className="flex justify-center items-center">
            <BookOpen className="w-4" /> <p>{wantToReadBlog?.readingTime}min read</p>
          </div>
        </div>
        <h1 className="text-neutral-500 text-md">
          {wantToReadBlog.articleSubTitle}
        </h1>
        <div className="border shadow p-4 mt-4">{renderContent()}</div>
      </div>
    </div>
  );
}

export default ParticularBlog;
