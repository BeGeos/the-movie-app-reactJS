import React from "react";
import "./Hero.css";

// import image from "../../images/tombRaiderDefault.png";

const IMAGE_PATH_URL = "https://image.tmdb.org/t/p/original";

const Hero = ({ hero }) => {
  // console.log(hero);
  return (
    <div
      className="hero"
      style={
        hero
          ? { backgroundImage: `url(${IMAGE_PATH_URL}${hero.backdrop_path})` }
          : null
      }
    >
      <div className="hero__container">
        <div className="hero__content">
          <h2>{hero ? hero.title : null}</h2>
          <p>{hero ? hero.overview : null}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
