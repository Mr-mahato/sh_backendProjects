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
      className="modelPresent absolute inset-0 min-w-screen  bg-black  bg-opacity-60 flex justify-center items-center z-30"
    >
      {children}
    </div>
  );
}

export default UserProfileModel;
