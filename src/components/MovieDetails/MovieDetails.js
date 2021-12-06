import React from "react";
import "./MovieDetails.css";

import MovieCard from "../MovieCard";

function MovieDetails({
  cardImage,
  movieTitle,
  movieDescription,
  movieReleaseDate,
}) {
  return (
    <div className="movie__details">
      <MovieCard cardImage={cardImage} clickable={false} />

      <div className="movie__details-description">
        <h2>{movieTitle}</h2>
        <p>{movieDescription}</p>

        <div className="movie__details-footer">
          <strong>Released on: </strong>
          {movieReleaseDate}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
