import React, { useEffect, useState } from "react";
import { useBlogContext } from "@/Context/BlogContext";
import { useParams } from "react-router-dom";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import DOMPurify from 'dompurify'
import 'quill/dist/quill.snow.css';
import '@/styles.css';
function ParticularBlog() {
  const { blogCollection } = useBlogContext();
  const { blogId } = useParams();
  const wantToReadBlog = blogCollection.find((blog) => blog._id === blogId);

  const renderContent = () => {
    if (!wantToReadBlog) return null;
    
    const converter = new QuillDeltaToHtmlConverter(wantToReadBlog.articleContent, {});
    const html = converter.convert();
    const sanitizedHtml = DOMPurify.sanitize(html); // Sanitize the HTML content
  
    return <div className="ql-editor" dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
  };

  return (
    <div className="my-10 w-[90%] mx-auto min-h-screen  p-4  min-h-4xl">
      <div className="bg-neutral-50 md:w-[60%]  rounded-lg border p-4">
        <h1 className="text-neutral-900 font-semibold text-3xl">{wantToReadBlog.articleTitle}</h1>
        <h1 className="text-neutral-500 text-lg">{wantToReadBlog.articleSubTitle}</h1>
        <div className="border shadow p-4 mt-4">{renderContent()}</div>
       
      </div>
    </div>
  );
}

export default ParticularBlog;
