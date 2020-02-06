const axios = require('axios');

module.exports = {
    async show(req,res) {
        let popularMovies = []
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c790c48b7f302bd18a9cf9ff38cfee4b').then(result => {
            // console.log(result.data);
            popularMovies.push(result.data);
        })
        return res.json(popularMovies[0].results)
    }
}