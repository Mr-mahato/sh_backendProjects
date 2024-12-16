import { useAuth } from "@/Context/AuthContext";
import UserNavModel from "@/Model/UserNavModel";
import React, { useState } from "react";

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

            <UserNavModel isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  User Details
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </form>
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
