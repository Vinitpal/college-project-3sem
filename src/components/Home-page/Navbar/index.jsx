// Management, Admission, Reach Us, About us, Placements

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const navbarArr = [
  {
    title: "Home",
  },
  {
    title: "About Us",
  },
  {
    title: "Placements",
  },
];

const LinkDesign = ({ showNavbar }) => {
  return (
    <div
      className={`w-full h-0.5 absolute ${
        showNavbar ? "bottom-0" : "bottom-3"
      }  bottom-0 bg-main transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0`}
    ></div>
  );
};

const NavLinks = ({ title, showNavbar }) => {
  return (
    <div className="mx-4 relative w-24 flex justify-center group overflow-hidden">
      <a className="text-lg hover:text-highlight " href="#">
        {title}
      </a>
      <LinkDesign showNavbar={showNavbar} />
    </div>
  );
};

const index = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div>
      <div className="flex flex-row justify-between items-center sticky top-0 w-full h-20 z-50 bg-tertiary">
        <img
          className="mx-4 w-4/6 md:h-2/3 lg:w-1/3"
          src="https://cdn.discordapp.com/attachments/753151975570276352/904779972890202183/logo.png"
          alt="logo"
        />
        <div
          className="lg:hidden text-main mx-6 p-2 cursor-pointer group"
          onClick={() => setShowNavbar(!showNavbar)}
        >
          {showNavbar ? (
            <AiOutlineCloseCircle className="group-hover:text-red-600 text-2xl" />
          ) : (
            <GiHamburgerMenu className="group-hover:text-secondary text-2xl" />
          )}
        </div>

        {/* Normal Navbar for desktop */}
        <div className="text-main hidden lg:flex w-2/6 justify-around">
          {navbarArr.map((item, id) => (
            <NavLinks title={item.title} showNavbar={showNavbar} key={id} />
          ))}
        </div>
      </div>

      {/* Hamburger Navbar for mobile and tab */}
      {showNavbar ? (
        <div className="h-12 transition-all duration-500 w-full bg-tertiary text-main flex justify-center">
          {navbarArr.map((item, id) => (
            <NavLinks title={item.title} showNavbar={showNavbar} key={id} />
          ))}
        </div>
      ) : (
        <div className="h-0 w-full transition-all  bg-tertiary hidden"></div>
      )}
    </div>
  );
};

export default index;
