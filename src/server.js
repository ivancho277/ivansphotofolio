//server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;


app.use(bodyParser.urlencoded({ extended: false }));

//setting up my home route
app.get('/', (req, res) => {
    res.send('Im home');
});

//second page or route
app.get('/second', (req, res) => {
    res.send('number two page')
});


app.listen(port, () => {
    console.log('Shit\'s running dawg, on ,', port);
});

