import Header from "@/Component/Header";
import Blog from "@/Component/Blog";
import React from "react";
import { Link } from "react-router-dom";
import UserLogin from "@/Component/UserLogin";
// #TODO: Lets work on adding the basic auth here

function Home() {
  return (
    <div className="md:max-w-[90%] px-4  mx-auto min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-3xl mt-10">Latest Posts</h1>
        <Link to={"/home/admin"} className="border self-end p-2 rounded-md">
          Admin
        </Link>
      </div>
      <div className="flex justify-between">
        <Blog />
        {/* <div className="flex-1">
          <UserLogin/>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
