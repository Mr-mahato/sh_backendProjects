import ArticleManipulation from "@/Component/ArticleManipulation";
import React from "react";

function UpdateBlog() {
  return (
    <div className="min-h-screen p-4 ">
      <ArticleManipulation text={"Update"} btn={"Update"}/>
    </div>
  );
}

export default UpdateBlog;
