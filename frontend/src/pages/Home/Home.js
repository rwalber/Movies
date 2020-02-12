import React, { useEffect, useState } from 'react';
import '../Home/Home.css';

import Movie from '../../Component/Movie/Movie';
import api from '../../services/api';

export default function Home() {

    const [searchMovie, setSearchMovie] = useState([]);

    async function searchMovies(event) {
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
                {/* <MoviesList /> */}
                <div className="searchMovies">
                    {searchMovie.map(movie => {
                        return <Movie key={movie.title+movie.id} movie={movie} />
                    })}
                </div>
            </div>
        </>
    );
}
