import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import MovieList from "./components/movielist/MovieList";
import Movie from "./components/movie/Movie";
import Search from "./components/search/Search";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:type" element={<MovieList />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
