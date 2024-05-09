const express = require('express');
const app = express();

const port = 3000;

app.use('/public', express.static('public'));

app.set('views', './views')
app.set('view engine', 'ejs')

//app.get('/movies-details', (req, res) => {
 //      res.render('movies-details')
//})

app.get('/movies', (req, res) => {
     //res.send('bientot des filmes ici');
     res.render('movies')
});

app.get('/movies/add', (req, res) =>{
    res.send('prochainement, un formulaire d\'ajout ici ' );
 });

app.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    //res.send(`film numéro ${id}`)
    const title = req.params.title;
   // const title = "Términator";
    res.render('movies-details', {movieid:id});
//})
});



app.get('/', (req, res) => {
    res.render('index');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

});