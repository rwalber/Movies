const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => {
    return res.json({OK: true})
});

app.use(cors());
app.use(routes);

app.listen(3333);