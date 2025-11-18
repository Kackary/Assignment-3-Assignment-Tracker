const express = require('express');
const connectDB = require('./config/database');
const app = express();

connectDB();

app.use(express.static('public'));
app.set('view engine', 'ejs');

const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});