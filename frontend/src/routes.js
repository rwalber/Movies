import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Movie from './pages/Movie/Movie';
import Home from './pages/Home/Home';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/movie" component={Movie}/>
            </Switch>
        </BrowserRouter>
    )
}