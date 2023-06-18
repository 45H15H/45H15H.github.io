/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import { useState } from "react";

import "./Header.css";

import "animate.css";

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="nav-bar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#get-in-touch">Contact</a>
      </div>
      
      <div className="burger">
        <button className="burger-btn" onClick={toggleMenu}>
          <div className={`burger-bar ${showMenu ? 'open' : ''}`}></div>
          <div className={`burger-bar ${showMenu ? 'open' : ''}`}></div>
          <div className={`burger-bar ${showMenu ? 'open' : ''}`}></div>
        </button>
      </div>
    

      <div className={`nav-column ${showMenu ? 'open' : ''}`}>   
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#get-in-touch">Contact</a>
      </div>
    </div>
  );
};

export default Header;
