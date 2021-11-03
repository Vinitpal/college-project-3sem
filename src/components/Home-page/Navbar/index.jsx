import "./navbar.css";

import { useEffect, useState } from "react";
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
      className={`link-underline ${showNavbar ? "bottom-0" : "bottom-3"}`}
    ></div>
  );
};

const NavLinks = ({ title, showNavbar }) => {
  return (
    <div className={`navlinks group ${showNavbar ? "my-2" : "my-0"}`}>
      <a className="text-lg hover:text-highlight" href="#">
        {title}
      </a>
      <LinkDesign showNavbar={showNavbar} />
    </div>
  );
};

const index = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      return;
    } else {
      setShowNavbar(true);
    }
  }, [showNavbar]);

  return (
    <>
      <div className="navbar-container">
        <img
          className="navbar-logo"
          src="https://cdn.discordapp.com/attachments/753151975570276352/904779972890202183/logo.png"
          alt="logo"
        />
        {/* Navbar toggle for mobile */}
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
        <div className="navbar-wrapper-pc">
          {navbarArr.map((item, id) => (
            <NavLinks title={item.title} showNavbar={showNavbar} key={id} />
          ))}
        </div>
      </div>

      {/* Hamburger Navbar for mobile and tab */}
      {showNavbar ? (
        <div className="navbar-wrapper-phone">
          {navbarArr.map((item, id) => (
            <NavLinks title={item.title} showNavbar={showNavbar} key={id} />
          ))}
        </div>
      ) : (
        <div className="hidden-navbar-phone"></div>
      )}
    </>
  );
};

export default index;
