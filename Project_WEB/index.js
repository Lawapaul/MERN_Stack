const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,"public")));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/current-weather', (req, res) => {
    res.render('current-weather.ejs');
});

app.get('/forecast', (req, res) => {
    res.render('forecast.ejs');
});

app.get('/about', (req, res) => {
    res.render('about.ejs');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});