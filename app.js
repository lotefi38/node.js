const express = require('express');
const app = express();

const port = 3000;

app.get('/movies', (req, res) => {
     res.send('bientot des filmes ici');
});

app.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    res.send(`film numéro ${id}`)
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

});