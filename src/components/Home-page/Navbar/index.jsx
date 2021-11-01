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
      <div className="text-main">
        <a className="mx-4 text-lg hover:text-highlight" href="#">
          Home
        </a>
        <a className="mx-4 text-lg hover:text-highlight" href="#">
          About Us
        </a>
        <a className="mx-4 text-lg hover:text-highlight" href="#">
          Placements
        </a>
      </div>
    </div>
  );
};

export default index;
