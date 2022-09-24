import axios from "axios";
import React, { useState } from "react";
import MovieList from "../movielist/MovieList";
import "./search.css";

const Search = () => {
  const [searchData, setSearchData] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  function fetchData(e) {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${searchData}&page=1&include_adult=false`
      )
      .then((res) => {
        setSearchResult(res.data.results);
      })
      .then(() => {});
  }

  return (
    <div className="search">
      <form onSubmit={fetchData}>
        <input
          placeholder="enter movie name..."
          autoFocus={true}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
        <input type="submit" value="Search" />
      </form>
      <MovieList search={searchResult} />
    </div>
  );
};

export default Search;
