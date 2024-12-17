import Blog from "@/Component/Blog";
import React from "react";

function Home({isAdmin}) {
  isAdmin = isAdmin ? false:true;
  return (
    <div className="md:max-w-[90%] px-4  mx-auto min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-3xl mt-10">Latest Posts</h1>
      
      </div>
      <div className="flex justify-between">
        <Blog isHome={isAdmin}/>
      </div>
    </div>
  );
}

export default Home;
