import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import axios from "axios";
import { api } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "@/Context/BlogContext";
const Editor = () => {
  const navigate = useNavigate();
  // State to handle changes in the text editor content
  const [content, setContent] = useState("");
  const [articleData, setArticleData] = useState({
    articleTitle: "",
    articleSubTitle: "",
  });
  const {addBlog} = useBlogContext();
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
    ],
    clipboard: {
      matchVisual: true,
    },
  };

  // Handle changes in the quill text editor
  const handleChange = (content, delta, source, editor) => {
    setContent(editor.getContents());
  };

  // Handle save button click
  const handleSave = async () => {
    try {
      const { ops } = content;

      console.log(ops);
      console.log("Content saved:", ops);
      const { data } = await axios.post(
        "http://localhost:3001/v1/api/admin/addblog",
        { ops, ...articleData },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('blogToken'))}`
          },
        }
      );
      console.log(data);
      addBlog(data.blogData);
      navigate(-1);
    } catch (error) {
      console.log(error);
      console.log(error.status);
    }

    // Add your logic to save the content to a database or API
  };

  return (
    <div className="w-1/2 border rounded-md p-4 mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold pl-4">New Article</h1>
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
          className="border w-1/2 border-gray-400 outline-none p-2 rounded-md"
          placeholder="Article Title"
        />

        <input
          type="text"
          value={articleData.articleSubTitle}
          onChange={(e) => {
            setArticleData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          name="articleSubTitle"
          className="border w-1/2 border-gray-400 outline-none p-2 rounded-md"
          placeholder="Article Subtitle...."
        />
        <div className="  flex  flex-col">
          <ReactQuill
            className="min-h-[10rem]  rounded-md "
            theme="snow"
            formats={[
              "header",
              "font",
              "ize",
              "bold",
              "italic",
              "underline",
              "strike",
              "blockquote",
              "list",
              "bullet",
              "code-block",
              "indent",
              "link",
              "image",
            ]}
            placeholder="write your blog..."
            modules={modules}
            value={content}
            onChange={handleChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 self-end text-white font-bold py-2 px-4 rounded cursor-pointer w-20 ml-[34%] mb-6"
            onClick={() => handleSave()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
