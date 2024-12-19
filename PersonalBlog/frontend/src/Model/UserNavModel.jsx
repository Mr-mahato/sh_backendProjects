import React from "react";

const UserNavModel = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const checkClickedOutside = (e) => {
    if (e.target.classList.contains("modelPresent")) {
      onClose();
    }
  };

  return (
    <div
      onClick={checkClickedOutside}
      className="fixed modelPresent inset-0 bg-black bg-opacity-60 flex  justify-end  z-20"
    >
      <div className="bg-white rounded-lg shadow-xl p-6 md:w-[20%] w-[50%] top-14 right-5 max-w-sm max-h-fit relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default UserNavModel;
