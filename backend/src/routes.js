const express = require('express');

const routes = express.Router();

const MovieDetail = require('./controllers/MovieDetail');
const PopularMovies = require('./controllers/PopularMovies');
const SearchMovies = require('./controllers/SearchMovies');
const MovieVideo = require('./controllers/MovieVideo');

routes.get('/popularMovies', PopularMovies.show);
routes.get('/movie/:movie_id', MovieDetail.show);
routes.get('/search/:query', SearchMovies.show);
routes.get('/movie/:movie_id/video', MovieVideo.show);

module.exports = routes;