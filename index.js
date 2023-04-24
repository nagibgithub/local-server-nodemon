const express = require('express');
const app = express();
const port = 3000;

const jsonData = require('./data/category.json');

app.get('/', (req, res) => {
    res.send('this is live local server');
});

app.get('/data', (req, res) => {
    res.send(jsonData);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${ port }`);
});