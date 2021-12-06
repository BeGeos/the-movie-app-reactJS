import React from "react";
import "./MovieGrid.css";
import MovieCard from "../MovieCard";

import NoImage from "../../images/default-movie.jpeg";

const POSTER_PATH_URL = "https://image.tmdb.org/t/p/w500";

const Moviegrid = ({ movies, heading }) => {
  // console.log(movies);

  const Movies = movies.map((movie) => {
    // console.log("I am a movie" + movie);
    const imagePath = movie.poster_path
      ? `${POSTER_PATH_URL}${movie.poster_path}`
      : NoImage;
    return (
      <MovieCard
        key={movie.id}
        movieId={movie.id}
        cardImage={`${imagePath}`}
        clickable={true}
      />
    );
  });

  return (
    <div className="movies">
      <h2>{heading}</h2>
      <div className="movies__container">{Movies}</div>
    </div>
  );
};

export default Moviegrid;
