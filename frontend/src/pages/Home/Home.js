import React from 'react';
import '../Home/Home.css';

export default function Home() {
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
        </>
    )
}