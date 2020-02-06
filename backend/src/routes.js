const express = require('express');

const routes = express.Router();

const MovieDetail = require('./controllers/MovieDetail');
const PopularMovies = require('./controllers/PopularMovies');
const SearchMovies = require('./controllers/SearchMovies');

routes.get('/popularMovies', PopularMovies.show);
routes.get('/movie/:movie_id', MovieDetail.show);
routes.get('/search/:query', SearchMovies.show);

module.exports = routes;