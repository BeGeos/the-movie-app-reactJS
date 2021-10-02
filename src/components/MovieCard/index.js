import React from "react";

const MovieCard = ({ cardImage }) => {
  return (
    <div
      className="movie__card"
      style={{ backgroundImage: `url(${cardImage})` }}
    ></div>
  );
};

export default MovieCard;
