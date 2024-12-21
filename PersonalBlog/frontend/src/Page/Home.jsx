import Blog from "@/Component/Blog";
import { useAuth } from "@/Context/AuthContext";
import React from "react";


function Home({isAdmin}) {
  isAdmin = isAdmin ? false:true;
  const {user} = useAuth();
  return (
    <div className="md:max-w-[90%] px-4  mx-auto min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-3xl mt-10 capitalize">
          {isAdmin?"Latest Posts":`${user.username} Blog's`}
          </h1>
      
      </div>
      <div className="flex justify-between mb-10">
        <Blog isHome={isAdmin}/>
      </div>
    </div>
  );
}

export default Home;
