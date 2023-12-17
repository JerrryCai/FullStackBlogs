const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint to get all blogs
app.get('/api/v1/blogs', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ error: 'Error reading file' });
      return;
    }
    res.send(JSON.parse(data).blogs);
  });
});

// Endpoint to add a new blog
app.post('/api/v1/blogs', (req, res) => {
  const newBlog = req.body; // Assuming the new blog data is sent in the request body

  // Read the existing data
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ error: 'Error reading file' });
      return;
    }

    // Parse the existing data and add the new blog
    const blogs = JSON.parse(data).blogs;
    blogs.push(newBlog);

    // Write the updated blogs back to the file
    fs.writeFile('data.json', JSON.stringify({ blogs }), 'utf8', (err) => {
      if (err) {
        res.status(500).send({ error: 'Error writing file' });
        return;
      }
      res.status(201).send(newBlog);
    });
  });
});

// Start the server
app.listen(4000, () => {
  console.log('Listening on 4000');
});
