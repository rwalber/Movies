const express = require('express');
// const axios = require('axios');
const routes = require('./routes');

const app = express();

app.get('/', (req, res) => {
    return res.json({OK: true})
});

app.use(routes);
app.listen(3333);