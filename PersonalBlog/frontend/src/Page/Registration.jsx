import Login from "@/Component/Login";
import Register from "@/Component/Register";
import React, { useState } from "react";

function Registration() {
  const [userChoice, setUserChoice] = useState("Login");
  return (
    <div className="min-w-full min-h-screen  bg-opacity-50 flex justify-center items-center bg-neutral-200">
      <div className="md:w-[30%] w-[50%] bg-white rounded-lg  shadow-lg p-8   border ">
        <div className="flex border p-2 rounded-md   justify-around items-center ">
          <p className="text-xl cursor-pointer " onClick={() => setUserChoice("Login")}>Login</p>
          <p className="text-xl  cursor-pointer"  onClick={() => setUserChoice("Register")}>Register</p>
        </div>
        {userChoice == "Login" ? <Login /> : <Register />}
      </div>
    </div>
  );
}

export default Registration;
