require("dotenv").config();

const express = require('express');
const app = express();

const path = require('path');

app.use(express.static('public'));

/* ROUTES */
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/registrar', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

/* UP */
const port = process.env.PORT || 4000;
const linkcito = 'http://127.0.0.1:' + port;
app.listen(port, () =>
    console.log('¡Up!', linkcito)
);