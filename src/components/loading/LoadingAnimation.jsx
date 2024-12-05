import React from "react";

export default function LoadingAnimation() {
  return (
    <div className="flex justify-center items-center bg-blue-900 w-full h-screen ">
      <div className="flex space-x-3 p-4 bg-blue-700 rounded-lg">
        <div className="w-6 h-6 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="w-6 h-6 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="w-6 h-6 bg-white rounded-full animate-pulse delay-700"></div>
        <div className="w-6 h-6 bg-white rounded-full animate-pulse delay-900"></div>
      </div>
    </div>
  );
}
