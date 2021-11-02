// Management, Admission, Reach Us, About us, Placements
import React from "react";

const index = () => {
  return (
    <div className="flex items-center justify-between sticky top-0 w-full h-20 z-50 bg-tertiary">
      <img
        className="mx-4 w-1/3"
        src="https://cdn.discordapp.com/attachments/753151975570276352/904779972890202183/logo.png"
        alt="logo"
      />
      <div className="text-main flex w-2/6 justify-around">
        <div className="mx-4 relative w-24 flex justify-center group overflow-hidden">
          <a className="text-lg hover:text-highlight " href="#">
            Home
          </a>
          <div className="w-full h-0.5 absolute bottom-0 bg-main transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
        </div>

        <div className="mx-4 relative w-24 flex justify-center group overflow-hidden">
          <a className=" text-lg hover:text-highlight" href="#">
            About Us
          </a>
          <div className="w-full h-0.5 absolute bottom-0 bg-main transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
        </div>

        <div className="mx-4 relative w-24 flex justify-center group overflow-hidden">
          <a className=" text-lg hover:text-highlight" href="#">
            Placements
          </a>
          <div className="w-full h-0.5 absolute bottom-0 bg-main transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
        </div>
      </div>
    </div>
  );
};

export default index;
