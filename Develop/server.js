const express = require('express');
const path = require('path');
const fs = require('fs');
//Import our Router
const api = require('./routes/notes.js');

const PORT = process.env.PORT || 3020

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Create route to API
app.use('/api', api);

// GET Route for root of our API, aka our homepage
app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

// GET Route that also returns homepage as directed by HW instructions
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

// GET Route for notes HTML page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);