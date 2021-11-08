
  
  // GET Route for Notes Page
  app.get('/api/notes', (req, res) => {
      res.sendFile(path.join(__dirname, '/public/notes.html'))
    });
  
  /* GET Route for retrieving all the tips
  app.get('/api/tips', (req, res) => {
      console.info(`${req.method} request received for tips`);
      readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
    });
    
    // POST Route for a new UX/UI tip
    app.post('/api/tips', (req, res) => {
      console.info(`${req.method} request received to add a tip`);
    
      const { username, topic, tip } = req.body;
    
      if (req.body) {
        const newTip = {
          username,
          tip,
          topic,
          tip_id: uuid(),
        };
    
        readAndAppend(newTip, './db/tips.json');
        res.json(`Tip added successfully 🚀`);
      } else {
        res.error('Error in adding tip');
      }
    });*/
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  