import React from "react";

function UserProfileModel({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  const checkClickOutside = (e) => {
    if (e.target.classList.contains("modelPresent")) {
      onClose();
    }
  };
  return (
    <div
      onClick={checkClickOutside}
      className="modelPresent absolute inset-0 min-w-screen min-h-screen bg-black  bg-opacity-60 flex justify-center items-center z-30"
    >
      {/* <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
      >
        x
      </button> */}
      {children}
    </div>
  );
}

export default UserProfileModel;
