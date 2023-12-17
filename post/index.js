const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api/v1/blogs', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ error: 'Error reading file' });
      return;
    }
    res.send(JSON.parse(data).blogs);
  });
});

app.post('/api/v1/blogs', (req, res) => {});

app.listen(4000, () => {
  console.log('Listening on 4000');
});
