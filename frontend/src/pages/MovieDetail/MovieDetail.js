import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import './MovieDetail.css';

import api from '../../services/api';

export default function MovieDetail(props) {
    
    const movie_id = props.match.params.movie_id;
    const [movie, setMovie] = useState([]);
    const [movieVideo, setMovieVideo] = useState();
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        async function movieDetail(movie_id) {
            const response = await api.get(`/movie/${movie_id}`, {});
            setMovie(response.data);
            setGenre(response.data.genres);
        }
        movieDetail(movie_id);
    }, []);

    useEffect(() => {
        async function movieDetail(movie_id) {
            const response = await api.get(`movie/${movie_id}/video`, {});
            setMovieVideo(response.data);
        }
        movieDetail(movie_id);
    }, []);

    const videoSettings = {
        height: '490',
        width: '1000',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0
        }
    }

    function onReady(event) {
        event.target.pauseVideo();
    }

    function reverse(date){
        if(date){
            return Array.from(date.split('-')).reverse().join('-');
        }
    }

    return (
        <>
        <div className="content">
            <div className="header">
                <div className="movie">
                    <p>Movies</p>
                </div>
            </div>

            <div className="body">

                <div className="title">
                    {/* Use String(value) to resolve the NaN Warning */}
                    <div className="titleMovie">
                        <p>{String(movie.title)}</p>
                    </div>

                    <div className="date">
                        <p>{String(reverse(movie.release_date))}</p>
                    </div>

                </div>

                <div className="overview">
                    <div className="overview_text">
                        <h3>Synopsis</h3>
                        <hr />
                        <p>{String(movie.overview)}</p>
                        <div className="inf">
                            <div className="inf_header">
                                <h3>Information</h3>
                                <hr />
                            </div>
                            <div className="inf_body">
                                <div className="status">
                                    <h4>Status</h4>
                                    <h5>{String(movie.status)}</h5>
                                </div>
                                <div className="language">
                                    <h4>Language</h4>
                                    <h5>{String(movie.original_language)}</h5>
                                </div>
                                <div className="duration">
                                    <h4>Runtime</h4>
                                    <h5>{String(movie.runtime)} min</h5>
                                </div>
                                <div className="budget">
                                    <h4>Budget</h4>
                                    <h5>US$ {String(movie.budget)}</h5>
                                </div>
                                <div className="revenue">
                                    <h4>Revenue</h4>
                                    <h5>US$ {String(movie.revenue)}</h5>
                                </div>
                                <div className="profit">
                                    <h4>Profit</h4>
                                    <h5>US$ {String(movie.revenue - movie.budget)}</h5>
                                </div>
                            </div>
                        </div>
                        
                        <div className="genres">
                            {genre.map(g => {
                                return <label key={String(g.name)}>{String(g.name)}</label>
                            })}
                        </div>

                        <div className="rated">
                            <div className="rated_inner">
                                <div className="rated_outer">
                                    {String(movie.vote_average * 10)}%
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="overview_poster">
                        <img src={`https://image.tmdb.org/t/p/original/${String(movie.poster_path)}`} alt="poster_path" />
                    </div>
                </div>

                <div className="trailer">
                    <YouTube
                        videoId={String(movieVideo)}
                        opts={videoSettings}
                        onReady={onReady}
                    />
                </div>
            </div>
        </div>
        </>
    )
}