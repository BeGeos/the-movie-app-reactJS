import React from "react";
import "./MovieDetails.css";

import MovieCard from "../MovieCard";
import CastCard from "../Cast";

function filterCast(cast) {
  return cast.slice(0, 5);
}

function filterCrew(crew) {
  return crew.find(({ job }) => job === "Director");
}

function MovieDetails({
  cardImage,
  movieTitle,
  movieDescription,
  movieReleaseDate,
  credits,
}) {
  let cast = [...filterCast(credits.cast), filterCrew(credits.crew)];

  return (
    <div className="movie__details">
      <MovieCard cardImage={cardImage} clickable={false} />

      <div className="movie__details-container">
        <div className="movie__details-description">
          <h2>{movieTitle}</h2>
          <p>{movieDescription}</p>

          <div className="movie__details-footer">
            <strong>Released on: </strong>
            {movieReleaseDate}
          </div>
        </div>
        <div className="movie__credits">
          {cast.map((detail) => (
            <CastCard details={detail} key={detail.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
