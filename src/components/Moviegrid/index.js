import React from "react";
import "./MovieGrid.css";
import MovieCard from "../MovieCard";

// Images
// import MovieImage from "../../images/jamesBond.jpg";

// Mock movie data
// const movieData = [
//   {
//     id: 1,
//     title: "James Bond",
//     imageURL: MovieImage,
//     rating: 5,
//   },
//   {
//     id: 2,
//     title: "Jumanji",
//     imageURL: MovieImage,
//     rating: 5,
//   },
//   {
//     id: 3,
//     title: "Star Wars",
//     imageURL: MovieImage,
//     rating: 1,
//   },
//   {
//     id: 4,
//     title: "Indiana Jones",
//     imageURL: MovieImage,
//     rating: 5,
//   },
// ];

import NoImage from "../../images/default-movie.jpeg";

const POSTER_PATH_URL = "https://image.tmdb.org/t/p/w500";

const Moviegrid = ({ movies, heading }) => {
  // console.log(movies);

  const Movies = movies.map((movie) => {
    // console.log("I am a movie" + movie);
    const imagePath = movie.poster_path
      ? `${POSTER_PATH_URL}${movie.poster_path}`
      : NoImage;
    return <MovieCard key={movie.id} cardImage={`${imagePath}`} />;
  });

  return (
    <div className="movies">
      <h2>{heading}</h2>
      <div className="movies__container">{Movies}</div>
    </div>
  );
};

export default Moviegrid;
