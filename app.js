const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/movies', (req, res) => {
    const title = 'Films français des 20 dernières années';
    const frenchMovies = [
        { title: 'Josephine ange gardien', years: 2001 },
        { title: 'Le fabuleux destin de Amélie Poulain', years: 2003 },
        { title: 'Les sept merveilles', years: 2008 },
        { title: 'Le gardien de la galaxie', years: 2024 }
    ];
    res.render('movies', { movies: frenchMovies, title: title });
});

app.post('/movies', (req, res) => {
    console.log('le titre:', req.body.movietitle);
    console.log('année:', req.body.movieyear);
    res.sendStatus(201);
});

app.get('/movies/add', (req, res) => {
    res.send('Prochainement, un formulaire d\'ajout ici.');
});

//app.get('/movies/:id', (req, res) => {
  //  const id = req.params.id;
 //   res.render('movies-details', { movieid: id });
//});

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
