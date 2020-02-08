import React from 'react';
import './MovieDetail.css';
import YouTube from 'react-youtube';

import poster_test from '../../assets/poster_avangers.jpg';

export default function movieDetail() {

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

    return (
        // <>
        <div className="content">

            <div className="header">
                <div className="movie">
                    <p>Movies</p>
                </div>
            </div>

            <div className="body">

                <div className="title">

                    <div className="titleMovie">
                        <p>Título do filme</p>
                    </div>

                    <div className="date">
                        <p>10/10/2020</p>
                    </div>

                </div>

                <div className="overview">
                    <div className="overview_text">
                        <h3>Sinopse</h3>
                        <hr />
                        <p>Sinopse é o resumo da obra que autores
                            enviam a editoras para avaliação. Há um
                            pouco de confusão a respeito porque a
                            palavra tem o mesmo significado ..</p>
                        <div className="inf">
                            <div className="inf_header">
                                <h3>Informações</h3>
                                <hr />
                            </div>
                            <div className="inf_body">
                                <div className="status">
                                    <h4>
                                        Situação
                                </h4>
                                    <h5>
                                        Ativo
                                </h5>
                                </div>
                                <div className="language">
                                    <h4>
                                        Idioma
                                </h4>
                                    <h5>
                                        Português
                                </h5>
                                </div>
                                <div className="duration">
                                    <h4>
                                        Duração
                                </h4>
                                    <h5>
                                        1:30:00
                                </h5>
                                </div>
                                <div className="budget">
                                    <h4>
                                        Orçamento
                                </h4>
                                    <h5>
                                        50 mil
                                </h5>
                                </div>
                                <div className="revenue">
                                    <h4>
                                        Receita
                                </h4>
                                    <h5>
                                        100 mil
                                </h5>
                                </div>
                                <div className="profit">
                                    <h4>
                                        Lucro
                                </h4>
                                    <h5>
                                        50 mil
                                </h5>
                                </div>
                            </div>
                        </div>


                        <div className="genres">
                            <label>Ação</label>
                            <label>Ficção</label>
                            <label>Aventura</label>
                        </div>

                        <div className="rated">
                            <div className="rated_inner">
                                <div className="rated_outer">
                                    75%
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="overview_poster">
                        <img src={poster_test} alt="poster"/>
                    </div>
                </div>

                <div className="trailer">
                    <YouTube
                        videoId="g6ng8iy-l0U"
                        opts={videoSettings}
                        onReady={onReady}
                    />
                </div>
            </div>
        </div>
        // </>
    )
}