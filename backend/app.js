const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/book');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api', (req, res) => {
  res.send('API works!');
});

app.use('/api', bookRoutes);

app.get('*', (req, res) => res.send('XDDDDDDD'));

module.exports = app;
