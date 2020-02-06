import React from 'react';
import '../Movie/Movie.css';

export default function Movie() {
    return (
        <>
        <div className="content_movie">

            <div className="posterImage">
                <h1>poster</h1>
            </div>

            <div className="movie">
                
                <div className="rated">
                    <div className="rated_inner">
                        <p>100%</p>
                    </div>
                </div>

                <div className="title">
                    <p>Título do filme</p>
                </div>
                
                <div className="overview">
                    <p className="moviePremiere">05/02/2020</p>
                    <p className="overview_text">
                        The Killer Must Kill Again (Italian: L'assassino è costretto ad uccidere ancora) 
                        is a 1975 giallo film directed by Luigi Cozzi. Allmovie called the film "too erratic 
                        for the general horror audience" but "offers just enough suspense and style to please 
                        patient giallo fans." Giorgio is a greedy adulterer who makes a deal with a serial 
                        killer to dispose of his wealthy wife, Nora. Unfortunately, a thrill-seeking young 
                        couple steal the killer's car with Nora's corpse in the trunk, ending up at a run-down seaside villa.
                    </p>
                    <div className="category">
                        <label>Action</label>
                        <label>Action</label>
                        <label>Action</label>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}