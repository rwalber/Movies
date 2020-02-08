const axios = require('axios');

module.exports = {
    async show(req, res){
        await axios.get(`https://api.themoviedb.org/3/movie/${req.params.movie_id}/videos?api_key=c790c48b7f302bd18a9cf9ff38cfee4b`).then(result => {
            video_id = result.data;
        })
        //return key to first video
        return res.json(video_id.results[0].key);
    }
}