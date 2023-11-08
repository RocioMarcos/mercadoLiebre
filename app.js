require("dotenv").config();

const express = require('express');
const app = express();

const path = require('path');

app.use(express.static('public'));

/* ROUTES */
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '/views/index.html'));
});

/* UP */
const port = process.env.PORT || 4000;
const linkcito = 'http://127.0.0.1:' + port;
app.listen(port, () =>
    console.log('¡Up!', linkcito)
);