const axios =require('axios');

module.exports = {
    async show(req, res) {
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c790c48b7f302bd18a9cf9ff38cfee4b&query=${req.params.query}&include_adult=false`).then(result => {
            console.log(result.data);
        })
        return res.json("Search movie")
    }
}

// axios.get(`https://image.tmdb.org/t/p/original/${url_img}`).then(result => {

// })