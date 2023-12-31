const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());
const PORT = process.env.PORT || 4001;

const DATA_FILE = path.join(__dirname, 'blogs.json');

app.use(bodyParser.json());

// 读取用户数据
const readBlogsData = () => {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
};

// 保存用户数据
const saveUserData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

//读取blogs
app.get('/api/v1/blogs', (req, res) => {
  const blogs = readBlogsData();
  res.status(200).json(blogs);
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});