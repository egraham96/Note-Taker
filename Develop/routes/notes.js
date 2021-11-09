const fs = require('fs');
const { title } = require('process');
const util = require('util');
const uuid = require('../helpers/uuid');

//Could have also grabbed and read the JSON file using just the FS readFile() method. But,this method is more sophisticated and does not slow down application if reading large files.
const read = util.promisify(fs.readFile);

// GET Route for Notes Page
  app.get('/api/notes', (req, res) => {
    read("./db/db.json",(err, data) => {
        if (err) {
          console.error(err);
        } else {
          const parsedData = JSON.parse(data);
          return res.json(parsedData);
        }
    })}
  );
  
  
//GET Route for retrieving all the tips
  app.get('/api/tips', (req, res) => {
      console.info(`${req.method} request received for tips`);
      readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
    });
    
// POST Route for a new UX/UI tip
   app.post('/api/notes', (req, res) => {
       console.info(`${req.method} request received to add a review`);
    
      const { noteTitle, noteText } = req.body;
    
      if (noteTitle, noteText) {
        const newNote = {
          noteTitle,
          noteText,
          id: uuid(),
        };

    
        readAndAppend(newNote, './db/db.json');

        // Create response
        const response = {
        status: "success",
        body: newNote,
    };
        response.json(`Tip added successfully 🚀`);
      } else {
        response.error('Error in creating new note');
      }
    });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  