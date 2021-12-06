import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movieId, cardImage, clickable }) => {
  if (clickable) {
    return (
      <div
        className="movie__card"
        style={{ backgroundImage: `url(${cardImage})` }}
      >
        <Link to={`/${movieId}`}></Link>
      </div>
    );
  }
  return (
    <div
      className="movie__card"
      style={{ backgroundImage: `url(${cardImage})` }}
    ></div>
  );
};

export default MovieCard;
