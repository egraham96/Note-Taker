const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Route for API
require('./routes/notes')(app);


// GET Route for root of our API, aka our homepage
app.get("/", (req, res) =>{
  res.sendFile(path.join(__dirname, 'public/index.html'))
});

// GET Route for notes HTML page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for index HTML page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port} 🚀`)
);
