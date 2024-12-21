import { useAuth } from "@/Context/AuthContext";
import UserNavModel from "@/Model/UserNavModel";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pen, NotepadText, Settings, UserPen, LogOut } from "lucide-react";
import UserProfileModel from "@/Model/UserProfileModel";

function Header() {
  const { setIsAuthenticated } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModelOpen, setIsProfileModelOpen] = useState(false);
  const userLogOut = async () => {
    try {
      setIsAuthenticated(false);
      localStorage.removeItem("blogToken");
    } catch (error) {
      console.log(error);
    }
  };
  // this one close the model of the userNav
  const makeModelOff = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <nav className="w-[90%]  mx-auto">
        <div className="flex justify-between">
          <Link to={"/home"} className="text-2xl">
            <span className="font-bold text-6xl">M</span>ini
            <span className="font-bold italic text-green-500 text-4xl">B</span>
            log
          </Link>
          <div className="self-center">
            {/* if user image xa vane */}
            {/* <img src="" alt="" /> */}
            <div
              onClick={() => setIsModalOpen(true)}
              className="h-[3rem] w-[3rem] flex justify-center items-center shadow-lg cursor-pointer border  rounded-full"
            >
              <span className="text-neutral-400 text-xl  font-semibold">C</span>
            </div>

            {/* differnet user navigate model */}
            <UserNavModel
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            >
              <div className="">
                <div className="flex border-b flex-col gap-3">
                  <div className="userNav">
                    <Pen className="w-4 " />
                    <Link
                      onClick={makeModelOff}
                      to="/home/new-blog-creation"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      New Blog
                    </Link>
                  </div>
                  <div className="userNav">
                    <NotepadText className="w-4" />
                    <Link
                      onClick={makeModelOff}
                      to="/home/personalblog"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      All Blogs
                    </Link>
                  </div>
                </div>

                <div className="border-b py-2">
                  <div className="userNav">
                    <Settings className="w-4" />
                    <Link
                      onClick={makeModelOff}
                      to="/home/admin"
                      className="text-gray-700   hover:text-gray-900"
                    >
                      Blog Dashboard
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <div className="userNav">
                    <UserPen className="w-4" />
                    <p
                      onClick={() => {
                        setIsProfileModelOpen(true);
                        setIsModalOpen(false);
                      }}
                      className="text-gray-700 hover:text-gray-900"
                    >
                      User Profile
                    </p>
                  </div>

                  <div className="userNav">
                    <LogOut className="w-4" />
                    <button
                      onClick={userLogOut}
                      className="text-gray-700 self-start  hover:text-gray-900"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </UserNavModel>

            <UserProfileModel
              isOpen={isProfileModelOpen}
              onClose={() => setIsProfileModelOpen(false)}
            >
              <div className="border md:w-[30%] w-[80%] min-h-[20rem] bg-gray-200 p-4 rounded-lg">
                <h1 className="text-xl font-bold mb-4">Update Profile</h1>
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <img
                      src="path/to/profile-image.jpg"
                      alt="Profile"
                      className="w-24 h-24 rounded-full border border-black object-cover"
                    />
                    <input
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </UserProfileModel>
          </div>
        </div>
        <hr />
      </nav>
    </>
  );
}

export default Header;
