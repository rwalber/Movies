import React, { useEffect, useState } from 'react';
import './App.css';

import Routes from './routes';
import Movie from './Component/Movie/Movie';
import api from './services/api';

function App() {

  const [pMovies, setPMovies] = useState([]);

  useEffect(() => {
    async function loadPopularMovies() {
      const response = await api.get('/popularmovies', {});
      // console.log(response.data)
      setPMovies(response.data);
    }
    loadPopularMovies();
  }, []);

  return (
    <>
      <div className="content">
        <div className="movie">
          <p>Movies</p>
        </div>

        <div className="inputSearch">
          <input type="text" placeholder="Busque um filme por nome, ano ou gênero.." />
        </div>
      </div>

      <div className="movies">
        {pMovies.slice(0, 6).map(movie => {
          // console.log(movie);
          return <Movie key={movie.title} movie={movie}/> })}
        {/* <Movie title={"movie.title"}/> */}
        {/* {console.log(pMovies)}; */}
        

      </div>
      <div>
        <Routes />
      </div>
    </>
  );
}

export default App;
