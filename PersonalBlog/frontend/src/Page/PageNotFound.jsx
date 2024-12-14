import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen min-w-full flex justify-center items-center">
      <div className="p-10 border rounded-md flex flex-col">
        <h1>404 Page Not Found</h1>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="p-2 rounded-md border italic font-semibold bg-neutral-100"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
