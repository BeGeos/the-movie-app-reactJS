import React, { useState, useEffect, useRef } from "react";

// Components
import Header from "../Header";
import Hero from "../Hero";
import SearchBar from "../SearchBar";
import Moviegrid from "../Moviegrid";

// Global Variables
const path = require("path");
require("dotenv").config();
const API_KEY = process.env.API_KEY;
const POPULAR_MOVIE_URL = "https://api.themoviedb.org/3/movie/popular";
const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie";

// console.log(API_KEY);
// console.log(__filename);

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const page = useRef(1);
  // Fetch the API data for popular movies
  async function fetchMovies(searchTerm = "") {
    try {
      setLoading(true);
      console.log("fetching");
      let URL;
      if (searchTerm) {
        URL =
          SEARCH_MOVIE_URL +
          `?api_key=${API_KEY}&page=${page.current}&query=${searchTerm}`;
      } else {
        URL = POPULAR_MOVIE_URL + `?api_key=${API_KEY}&page=${page.current}`;
      }
      let response = await fetch(URL);
      let data = await response.json();
      // console.log(data);

      setMovies((prev) => {
        return prev.concat(data.results);
      });

      page.current += 1;
      setTotalPages(() => data.total_pages);
      // console.log(page.current, totalPages);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
    return;
  }

  useEffect(() => {
    // console.log("API request");
    page.current = 1;
    setMovies([]);
    fetchMovies(searchValue);
    // console.log(movies);
  }, [searchValue]);

  return (
    <div>
      <Header />
      {!searchValue && <Hero hero={movies[0]} />}
      <SearchBar handleChange={setSearchValue} />
      <Moviegrid
        movies={movies}
        heading={searchValue ? "Search Results" : "Top Movies"}
      />
      <div className="load-more">
        {page.current <= totalPages ? (
          <button onClick={() => fetchMovies(searchValue)}>Load More...</button>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
