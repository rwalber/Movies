import React from 'react';
import '../Movie/Movie.css';

import genreList from '../../_constants/genreList';

export default function Movie({ movie }) {

    // let movieGenre;

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
                        <p>{movie.title}</p>
                    </div>

                    <div className="overview">
                        <p className="moviePremiere">{movie.release_date}</p>
                        <p className="overview_text">
                            {movie.overview}
                        </p>
                        <div className="category">
                            {/* {movie.genre_ids.slice(0,2).map(genre_id => { */}
                            {/* // let genreName = genreList.genres[genre_id].name; */}
                            {/* // genreName ? console.log(genreName) : console.log("Nao existe"); */}
                            {/* // console.log(genre_id); */}
                            {/* // genreList.genres.map(genre => { */}
                            {/* //     console.log(genre.id == genre_id); */}
                            {/* // }) */}
                            {/* // })} */}


                            {/* {movie.genre_ids.map(genre => {
                            genreList.genres[genre].name ? console.log(genreList.genres[genre].name) : "Nao existe"
                        })} */}

                            {/* <label>Action</label>
                        <label>Action</label> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}