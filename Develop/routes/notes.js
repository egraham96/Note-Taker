const fs = require('fs');
const util = require('util');
const uuid=require('../helpers/uuid');


// ROUTING
module.exports = function(app) {

// GET Route for Notes Page
  app.get('/api/notes', (req, res) => {
    fs.readFile("./db/db.json",(err, data) => {
        if (err) {
          console.error(err);
        } else {
          const parsedData = JSON.parse(data);
          return res.json(parsedData);
        }
    })}
  );
  
    
// POST Route for a new note
   app.post('/api/notes', (req, res) => {
       console.info(`${req.method} request received to add a note`);
       newNote=req.body;
       newNote.id=uuid();
       console.log(newNote);

       fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
        //Convert string into JSON Object
        const parsedNotes = JSON.parse(data);
        // Add a new review
        parsedNotes.push(newNote);

        const response={
            status: "success",
            body: newNote,
        };
        // Write updated reviews back to the file
        fs.writeFile(
            './db/db.json',
            JSON.stringify(parsedNotes), (err) => {
                if (err) {
                  console.error(err);
                }else{
                    res.json(response);
                }
              })
            }
          })
        });

//Delete Route for a Note
        app.delete('/api/notes/:id', (req, res) => {
            const id = req.params.id;
            fs.readFile('./db/db.json', (err, data) => {
                    results=JSON.parse(data);
                    const newresults =results.filter(data => data.id != id);
                fs.writeFile ('./db/db.json', JSON.stringify(newresults), (err) => {
                    if (err) {
                      console.error(err);
                    }else{
                      res.sendStatus(200);
                    }
                  })
                })
              });
           


            }
    
                   