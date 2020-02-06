const axios = require('axios');

module.exports = {
    async show(req,res) {
        await axios.get(`https://api.themoviedb.org/3/movie/${req.params.movie_id}?api_key=c790c48b7f302bd18a9cf9ff38cfee4b`).then(result => {
            movie = result.data;
        })
        return res.json(movie)
    }
}