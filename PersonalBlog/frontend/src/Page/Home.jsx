import Header from "@/Component/Header";
import Blog from "@/Component/Blog";
import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="max-w-[90%] mx-auto min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-3xl mt-10">Latest Posts</h1>
        <Link to={'/admin'} className="border self-end p-2 rounded-md">Admin</Link>
      </div>
      <Blog />
    </div>
  );
}

export default Home;
