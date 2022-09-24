import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../card/Card";
import Socials from "../Socials/Socials";
import "./movielist.css";

const MovieList = (props) => {
  const [data, setData] = useState([]);
  const { type } = useParams();

  function fetchData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&include_adult=false`
      )
      .then((res) => {
        setData(res.data.results);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    props.search ? setData(props.search) : fetchData();
  }, [type, props.search]);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="movielist">
      <Socials />
      {data.map((movie, index) => {
        return <Card movie={movie} key={index} />;
      })}
    </div>
  );
};

export default MovieList;
