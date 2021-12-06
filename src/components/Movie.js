import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

// Components
// import MovieCard from "./MovieCard";
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

async function fetchMovieCredits(id) {
  const MOVIE_CREDITS_URL =
    MOVIE_DETAIL_URL + `${id}/credits?api_key=${API_KEY}`;
  try {
    let response = await fetch(MOVIE_CREDITS_URL);
    let credits = await response.json();
    return credits;
  } catch (err) {
    console.error(err);
    return err;
  }
}

const Movie = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [credits, setCredits] = useState({});
  const { movieId } = useParams();

  async function getDetails(id) {
    try {
      let movieData = await fetchMovieDetails(id);
      let movieCredits = await fetchMovieCredits(id);
      setDetails(movieData);
      setCredits(movieCredits);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getDetails(movieId);
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
        className="movie__background"
      />
      <MovieDetails
        cardImage={
          details.poster_path
            ? `${POSTER_API_URL}${details.poster_path}`
            : NoImage
        }
        movieTitle={details.original_title}
        movieDescription={details.overview}
        movieReleaseDate={details.release_date}
        credits={credits}
      />
    </div>
  );
};

export default Movie;
