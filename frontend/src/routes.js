import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MovieDetail from './pages/MovieDetail/MovieDetail';
import Home from './pages/Home/Home';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = { Home } />
                <Route path="/detail/:movie_id" component = { MovieDetail }/>
            </Switch>
        </BrowserRouter>
    )
}