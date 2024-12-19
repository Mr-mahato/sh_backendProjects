import React from "react";

export const SkeletonLoader = () => {
  const skLoader = Array.from({ length: 6 }, (_, ind) => {
    return (
      <div key={ind} className="border p-2 min-w-1/2  rounded-md animate-pulse">
        <div className="flex justify-between">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
        </div>
        <div className="mt-2 h-4 bg-gray-300 rounded w-full"></div>
        <div className="mt-2 h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    );
  });

  return (
    <>
      <div className="flex justify-between min-w-[60%] flex-col mb-10">
        <div className="mt-4 md:w-1/2 min-h-screen">
          <div className="flex flex-col justify-between  gap-2">{skLoader}</div>
        </div>
      </div>
    </>
  );
};
