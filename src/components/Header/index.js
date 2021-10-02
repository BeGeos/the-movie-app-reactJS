import React from "react";
import "./Header.css";

// Images
import image from "../../images/movieLogo.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <a href="/">
          <h2>The Movie App</h2>
        </a>
        <img src={image} alt="movie logo" />
      </nav>
    </header>
  );
};

export default Header;
