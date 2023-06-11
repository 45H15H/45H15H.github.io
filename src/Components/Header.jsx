/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="nav-bar">

      <button className="menu-button" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>

      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#get-in-touch">Contact</a>

      {showMenu && (
        <div className="side-menu">
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#portfolio" onClick={toggleMenu}>
            Portfolio
          </a>
          <a href="#get-in-touch" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      )}

    </div>
  );
};

export default Header;
