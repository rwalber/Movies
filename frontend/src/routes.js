import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MovieDetail from './pages/MovieDetail/MovieDetail';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/movie" component={MovieDetail}/>
            </Switch>
        </BrowserRouter>
    )
}