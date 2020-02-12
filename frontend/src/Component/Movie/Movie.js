import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Movie/Movie.css';

import genreList from '../../_constants/genreList';

export default function Movie({ movie }) {
    const [genreMovie, setGenreMovie] = useState([]);
    
    useEffect(() => {
        async function loadGenreMovies() {
            let genre = movie.genre_ids.slice(0, 2).map(genre_id => {
                return genreList.genres.find(genre_name => {
                    return genre_name.id === genre_id
                })
            }
            )
            // console.log(movie)
            setGenreMovie(genre)
        }
        loadGenreMovies();
    }, []);

    function reverse(date){
        if(date){
            return Array.from(date.split('-')).reverse().join('-');
        }
    }

    return (
        <>
            <div className="content_movie">
                <div className="posterImage">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster_path" />
                </div>

                <div className="movie">
                    <div className="rated">
                        <div className="rated_inner">
                            <p>{movie.vote_average * 10}%</p>
                        </div>
                    </div>

                    <div className="title">
                        <Link to={`/detail/${movie.id}`}>
                            <button>{movie.title}</button>
                        </Link>
                    </div>

                    <div className="overview">
                        <p className="moviePremiere">{reverse(movie.release_date)}</p>
                        <p className="overview_text">
                            {movie.overview}
                        </p>
                        <div className="category">
                            {genreMovie.map(genreName =>
                                // Field key to avoid warning
                                <label key={movie.title + genreName.name}>
                                    {genreName.name}
                                </label>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}