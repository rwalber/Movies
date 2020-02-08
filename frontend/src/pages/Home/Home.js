import React, { useEffect, useState } from 'react';
import '../Home/Home.css';

import Movie from '../../Component/Movie/Movie';
import api from '../../services/api';

export default function Home() {

    // let search = false;
    const [pMovies, setPMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState([]);

    useEffect(() => {
        async function loadPopularMovies() {
            const response = await api.get('/popularmovies', {});
            setPMovies(response.data);
        }
        loadPopularMovies();
    }, []);

    async function searchMovies(event) {
        // search = true;
        const response = await api.get(`/search/${event}`, {});
        setSearchMovie(response.data);
    }

    return (
        <>
            <div className="content">
                <div className="movie">
                    <p>Movies</p>
                </div>

                <div className="inputSearch">
                    <input type="text"
                        placeholder="Busque um filme por nome, ano ou gênero.."
                        onChange={event => searchMovies(event.target.value)} />
                </div>
            </div>

            <div className="movies">
                {/* {(search === false) &&
          <div className="popularMovies">
            {pMovies.slice(0, 6).map(movie => {
              return <Movie key={movie.title} movie={movie} />
            })}
          </div>
        } */}

                <div className="searchMovies">
                    {searchMovie.slice(0, 6).map(movie => {
                        return <Movie key={movie.title+movie.id} movie={movie} />
                    })}
                </div>

            </div>
        </>
    );
}
