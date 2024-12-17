import { useAuth } from "@/Context/AuthContext";
import UserNavModel from "@/Model/UserNavModel";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const { setIsAuthenticated } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userLogOut = async () => {
    try {
      setIsAuthenticated(false);
      localStorage.removeItem("blogToken");
    } catch (error) {
      console.log(error);
    }
  };
  const makeModelOff = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <nav className="w-[90%]  mx-auto">
        <div className="flex justify-between">
          <h1 className="text-2xl">
            <span className="font-bold text-6xl">M</span>ini
            <span className="font-bold italic text-green-500 text-4xl">B</span>
            log
          </h1>
          {/* <button
            onClick={userLogOut}
            className="border h-1/2  self-center p-2 font-semibold    rounded-md bg-red-300 text-lg"
          >
            Log out
          </button> */}
          <div className="self-center">
            {/* if user image xa vane */}
            {/* <img src="" alt="" /> */}

            <div
              onClick={() => setIsModalOpen(true)}
              className="h-[3rem] w-[3rem] flex justify-center items-center shadow-lg cursor-pointer border  rounded-full"
            >
              <span className="text-neutral-400 text-xl  font-semibold">C</span>
            </div>

            <UserNavModel
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            >
              <div className="">
                <div className="flex border-b flex-col gap-3">
                  <Link
                    onClick={makeModelOff}
                    to="/home/new-blog-creation"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    New Blog
                  </Link>
                  <Link
                    onClick={makeModelOff}
                    to="/home/personalblog"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    All Blogs
                  </Link>
                </div>

                <div className="border-b py-2">
                  <Link
                    onClick={makeModelOff}
                    to="/home/admin"
                    className="text-gray-700   hover:text-gray-900"
                  >
                    Blog Dashboard
                  </Link>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <Link
                    onClick={makeModelOff}
                    to="/profile"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    User Profile
                  </Link>

                  <button
                    onClick={userLogOut}
                    className="text-gray-700 self-start  hover:text-gray-900"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </UserNavModel>
          </div>
        </div>
        <hr />
      </nav>
    </>
  );
}

export default Header;
