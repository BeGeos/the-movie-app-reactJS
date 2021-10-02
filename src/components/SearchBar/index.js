import React, { useEffect, useState, useRef } from "react";
import "./SearchBar.css";
import searchIcon from "../../images/searchIcon.svg";

const SearchBar = ({ handleChange }) => {
  const [inputValue, setInputValue] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      // console.log("Sent");
      handleChange(inputValue);
    }, 1000);

    return () => clearTimeout(timer);
  }, [inputValue, handleChange]);

  return (
    <div className="search-bar">
      <div className="search-bar__container">
        <input
          type="text"
          name="movie"
          id="movie"
          placeholder="Search a Movie..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>
          <img src={searchIcon} alt="search-icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
