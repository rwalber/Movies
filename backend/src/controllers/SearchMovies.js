const axios =require('axios');

module.exports = {
    async show(req, res) {
        let searchResult = []
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c790c48b7f302bd18a9cf9ff38cfee4b&query=${req.params.query}&include_adult=false`).then(result => {
            searchResult.push(result.data);
        })
        return res.json(searchResult[0].results)
    }
}