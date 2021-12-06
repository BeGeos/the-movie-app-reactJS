import React, { useEffect, useState } from "react";

// Components
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails/MovieDetails";
import Spinner from "./Spinner/Spinner";
// No Image
import NoImage from "../images/default-movie.jpeg";

// Globals
const API_KEY = process.env.API_KEY || "49789e1e9f7528dbf2838a7d663c7819";
const MOVIE_DETAIL_URL = "https://api.themoviedb.org/3/movie/";
const BACKDROP_API_URL = "https://image.tmdb.org/t/p/original";
const POSTER_API_URL = "https://image.tmdb.org/t/p/w500";

async function fetchMovieDetails(id) {
  try {
    let response = await fetch(MOVIE_DETAIL_URL + `${id}?api_key=${API_KEY}`);
    let details = await response.json();
    return details;
  } catch (err) {
    console.error(err);
    return err;
  }
}

// 550988 -- Free Guy

const Movie = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  async function getDetails(id) {
    try {
      let data = await fetchMovieDetails(id);
      setDetails(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getDetails(550988);
  }, []);

  // Show spinner when loading
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="movie__details-bg">
      <img
        src={`${BACKDROP_API_URL}${details.backdrop_path}`}
        alt="movie-background"
      />
      <MovieDetails
        cardImage={`${POSTER_API_URL}${details.poster_path}`}
        movieTitle={details.original_title}
        movieDescription={details.overview}
        movieReleaseDate={details.release_date}
      />
    </div>
  );
};

export default Movie;
