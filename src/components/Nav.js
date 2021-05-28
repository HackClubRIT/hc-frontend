import logo from "../assets/hackFlag.png";

import { useState } from "react";
import NavItem from "./NavItem";

const Nav = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 750) setColorchange(true);
    else setColorchange(false);
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className={colorChange ? "navbar nav__moved" : "navbar nav__top"}>
      <nav className="nav">
        <div className="nav__logo-box">
          <img className="nav__logo" src={logo} alt="logo"></img>
        </div>
        <div className="nav__menu-toggle" id="mobile-menu">
          <span class="nav__bar"></span>
          <span class="nav__bar"></span>
          <span class="nav__bar"></span>
          <span class="nav__bar"></span>
        </div>
        <ul className="nav__menu">
          <NavItem href="/" label="Events" />
          <NavItem href="/" label="Scrapbook" />
          <NavItem href="/" label="Contact Us" />
          <NavItem href="/" label="LogIn" />
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
