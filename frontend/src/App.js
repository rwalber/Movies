import React from 'react';
import './App.css';

import Routes from './routes';
// import Movie from './Component/Movie/Movie';
// import api from './services/api';

function App() {
  // let search = false;
  // const [pMovies, setPMovies] = useState([]);
  // const [searchMovie, setSearchMovie] = useState([]);

  // useEffect(() => {
  //   async function loadPopularMovies() {
  //     const response = await api.get('/popularmovies', {});
  //     setPMovies(response.data);
  //   }
  //   loadPopularMovies();
  // }, []);

  // async function searchMovies(event) {
  //   search = true;
  //   const response = await api.get(`/search/${event}`, {});
  //   setSearchMovie(response.data);
  // }

  return (
      <div>
        <Routes />
      </div>
  );
}

export default App;
