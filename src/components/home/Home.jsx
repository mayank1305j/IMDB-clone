import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./home.css";
import Socials from "../Socials/Socials";

const Home = () => {
  const [data, setData] = useState([]);
  function fetchData() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&include_adult=false"
      )
      .then((res) => {
        setData(res.data.results);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  const width = window.innerWidth <= 1125;

  return (
    <div className="home">
      <Socials />
      <Carousel
        className="carousel"
        showThumbs={false}
        autoPlay={true}
        transitionTime={width ? 100 : 1000}
        infiniteLoop={true}
        showStatus={false}
        stopOnHover={false}
        showArrows={width ? false : true}
        showIndicators={width ? false : true}
      >
        {data?.map((movie, index) => {
          return (
            <div className="home-backdrop" key={index}>
              <Link to={`/movie/${movie?.id}`}>
                <div className="overlay">
                  <div className="movieinfo">
                    <h1>{movie?.title}</h1>
                    <div className="rating">
                      <p>{movie?.vote_average}</p>
                      <i className="ri-star-fill"></i>
                    </div>
                    <p>
                      <b>release date :</b> {movie?.release_date}
                    </p>
                    {width ? (
                      <p className="overview">
                        {movie?.overview.slice(0, 118) + "..."}
                      </p>
                    ) : (
                      <p className="overview">
                        {movie?.overview.slice(0, 218) + "..."}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
              {width === false ? (
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                  alt={movie?.title}
                />
              ) : (
                <img
                  className="posterimg"
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  alt={movie?.title}
                />
              )}
            </div>
          );
        })}
      </Carousel>
      {width && (
        <a
          className="rating social"
          href="https://www.linkedin.com/in/mayank-joshi-9964a51b8/"
          rel="noreferrer"
          target="_blank"
        >
          <p>Mayank Joshi</p>
          <i className="ri-linkedin-box-fill"></i>
        </a>
      )}
    </div>
  );
};

export default Home;
