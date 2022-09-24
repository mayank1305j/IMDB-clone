import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="card">
        <div className="card-overlay">
          <h1>{movie?.title}</h1>
          <div className="rating">
            <p>{movie.vote_average}</p> <i className="ri-star-fill"></i>
          </div>
          <small className="desktop">
            {movie?.overview.slice(0, 318) + "..."}
          </small>
          <small className="mobile">
            {movie?.overview.slice(0, 118) + "..."}
          </small>
        </div>
        <img
          src={
            movie?.poster_path
              ? `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
              : "https://www.ellab.com/wp-content/uploads/2022/01/default_image.png"
          }
          alt={movie?.title}
        />
      </div>
    </Link>
  );
};

export default Card;
