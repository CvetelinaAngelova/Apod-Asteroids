import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <header
      className={`header ${location.pathname === "/" ? "home" : "nested"}`}
    >
      <div className="header-wrapper">
      <section className="header-nav">
        <div className="brand_area">
          <div className="brand"></div>
        </div>
        <div id="nav_container">
       
          <nav id="nav" className={`navbar ${navbarOpen ? " showMenu" : ""}`}>
            <Link to="/" onClick={() => closeMenu()}>
              Home
            </Link>
              <span className="devidedr"> {" "}|{" "}</span>
            <Link to="/asteroids" onClick={() => closeMenu()}>
              Asteroids
            </Link>
          </nav>
        </div>
      </section>
      <button
            className="hamburger hamburger--slider-r"
            onClick={handleToggle}
          >
            {navbarOpen ? "Close" : "Open"}
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          </div>
    </header>
  );
}
export default Header;
