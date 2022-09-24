import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movie.css";

const Movie = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  function fetchData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )
      .then((res) => {
        setData(res.data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="movie">
      <div className="banner">
        <img
          src={
            data?.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${data?.backdrop_path}`
              : "https://www.ellab.com/wp-content/uploads/2022/01/default_image.png"
          }
          alt={data?.title}
        />
        <div className="poster">
          <img
            src={
              data?.poster_path
                ? `https://image.tmdb.org/t/p/original/${data?.poster_path}`
                : "https://www.ellab.com/wp-content/uploads/2022/01/default_image.png"
            }
            alt={data?.title}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="description">
          <h1>{data?.title}</h1>
          {data.tagline && (
            <small>
              <i>{data.tagline}</i>
            </small>
          )}
          <br></br>
          {data.original_title !== data?.title && (
            <small>original title : {data.original_title}</small>
          )}

          <p>
            budget : <b> ${data?.budget}</b>
          </p>
          <p>{data?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
