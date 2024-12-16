import { useBlogContext } from "@/Context/BlogContext";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { api } from "@/lib/utils";
import Editor from "./TextEditor/Editor";


function ArticleManipulation({ text, btn }) {
  const { blogCollection, addBlog, editBlog } = useBlogContext();
  const { blogId } = useParams();

  const clickedBlog = blogCollection.find((val) => val._id == blogId);

  const [articleData, setArticleData] = useState({
    articleTitle: "",
    articleContent: "",
    createdAt: new Date(),
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (text == "Update" && blogId) {
      setArticleData({
        articleTitle: clickedBlog.articleTitle,
        articleContent: clickedBlog.articleContent,
        createdAt: clickedBlog.createdAt,
      });
    }
  }, [blogId, text]);

  const eitherUpdateOrCreate = async () => {
    try {
      if (text === "Update") {
        // one api call
        const { data } = await api.patch(
          `/admin/editBlog/${blogId}`,
          articleData
        );
        editBlog(data.blog);
      } else {
        // creating  new blog
        const { data } = await api.post("/admin/addblog", articleData);
        addBlog(data.blogData);
      }

      navigate(-1);
    } catch (error) {
      alert("somethign went wrong");
      console.error(error);
    }
  };

  // faced updating the state variable for the object type in state

  return (
    <div className="md:w-1/2  mt-10 rounded-lg border mx-auto">
      <div className="flex flex-col pt-20 w-[90%] pb-10 gap-2 md:w-[80%] mx-auto">
        <h1 className="text-4xl font-semibold ">{text} Article</h1>
        <input
          type="text"
          value={articleData.articleTitle}
          onChange={(e) => {
            setArticleData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          name="articleTitle"
          className="border-2 w-full border-gray-800 outline-none p-2 rounded-md"
          placeholder="Article Title"
        />
        <input
          type="text"
          value={new Date(articleData.createdAt).toLocaleDateString()}
          disabled
          className="border-2 border-gray-800 outline-none p-2 rounded-md"
          placeholder="Publishing Date"
        />

        {/* 
        Arrow Function: When using an arrow function to return an object, you need to wrap the object in parentheses to distinguish it from the function body.
        */}

        {/* #TODO: make this text editor rich text editor ( quill ) */}
        <textarea
          className="border-2 border-gray-800 outline-none p-2 rounded-md"
          name="articleContent"
          value={articleData.articleContent}
          onChange={(e) => {
            setArticleData((prev) => ({
              ...prev,
              /*
              The square brackets ([]) around e.target.name are used to dynamically set the property name in the object. This is known as computed property names in JavaScript.
              */
              [e.target.name]: e.target.value,
            }));
          }}
          placeholder="add your blog content"
          id="content"
          rows={10}
          cols={10}
        ></textarea>

        <button
          onClick={eitherUpdateOrCreate}
          className="border  p-2 self-end rounded-md "
        >
          {btn}
        </button>
      </div> 
    </div>
  );
}

export default ArticleManipulation;
