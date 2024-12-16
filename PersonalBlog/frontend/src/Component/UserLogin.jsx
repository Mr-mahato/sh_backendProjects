import { api } from "@/lib/utils";
import React, { useState } from "react";
import axios from "axios";
function UserLogin() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const handleUserLogin = async () => {
    try {
      console.log(userData);
      const authHeader = 'Basic ' + btoa(`${userData.username}:${userData.password}`);

      const {data} = await axios.get('http://localhost:3001/v1/api/user/login', {
        headers: {
          'Authorization': authHeader
        }
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-1/2 border rounded-md p-4">
      <div className="flex flex-col gap-4">
        <input
          className="outline-none border p-4"
          type="text"
          value={userData.username}
          name="username"
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          placeholder="Enter your name"
        />
        <input
          className="outline-none border p-4"
          name="password"
          value={userData.password}
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          type="password"
          placeholder="Enter your password"
        />
        <button
          onClick={handleUserLogin}
          className="border p-3 self-end px-4 font-semibold rounded-md"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default UserLogin;
