import logo from "../assets/hackFlag.png";

import { useState, useContext } from "react";
import Links from "./Links";
import AuthContext from "../store/auth-context";

const Nav = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 120) setColorchange(true);
    else setColorchange(false);
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className={colorChange ? "navbar nav__moved" : "navbar nav__top"}>
      <nav className="nav">
        <div className="nav__logo-box">
          <a href="/">
            <img className="nav__logo" src={logo} alt="logo"></img>
          </a>
        </div>
        <div className="nav__menu-toggle" id="mobile-menu">
          <span className="nav__bar"></span>
          <span className="nav__bar"></span>
          <span className="nav__bar"></span>
          <span className="nav__bar"></span>
        </div>
        <ul className="nav__menu">
          <Links href="events" label="Events" type="nav" />
          <Links href="scrapbook" label="Scrapbook" type="nav" />
          {!isLoggedIn && (
            <Links href="contact" label="Contact Us" type="nav" />
          )}
          {isLoggedIn && (
            <Links href="auth/application" label="application" type="nav" />
          )}
          {!isLoggedIn && <Links href="auth" label="LogIn" type="nav" />}
          <li className="nav__item">
            {isLoggedIn && (
              <button className="nav__btn nav__link" onClick={logoutHandler}>
                {" "}
                Logout{" "}
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
