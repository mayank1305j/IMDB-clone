import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h4>Home |</h4>
      </Link>
      <Link to="/movies/popular">
        <h4>Popular |</h4>
      </Link>
      <Link to="/movies/upcoming">
        <h4>Upcoming |</h4>
      </Link>
      <Link to="/search">
        <i className="ri-search-line"></i>
      </Link>
    </div>
  );
};

export default Navbar;
