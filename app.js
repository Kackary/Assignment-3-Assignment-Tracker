const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/assignments', (req, res) => {
  res.render("assignments");
});


app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
