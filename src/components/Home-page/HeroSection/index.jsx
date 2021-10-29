// big image with punch line

import React from "react";
import "./heroSection.css";

const index = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 w-full h-full bg-gray-200 bg-opacity-30"></div>
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-gray-800 font-bold tracking-wide">
        FUTURE LEARNING
      </h1>
      <img className="w-full h-full" src="/Images/hero-image.jpg" alt="SSTC" />
    </div>
  );
};

export default index;
