require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const app = express();

// 使用 CORS 中间件（允许所有来源）
app.use(cors());
const PORT = process.env.PORT || 3000;

// 用户数据文件路径
const DATA_FILE = path.join(__dirname, 'users.json');

// middleware
app.use(bodyParser.json());

// 读取用户数据
const readUserData = () => {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
};

// 保存用户数据
const saveUserData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// 注册路由
app.post('/api/v1/register', async (req, res) => {
  try {
    const users = readUserData();
    const { email, password, firstName, lastName } = req.body; // 从请求体中获取字段

    // 检查是否已存在相同的电子邮件
    if (users.some(user => user.email === email)) {
      return res.status(400).send('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({
      email,
      password: hashedPassword,
      firstName,
      lastName
    });
    saveUserData(users);
    res.status(201).send('User created');
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).send('Error occurred');
  }
});

// 登录路由
app.post('/api/v1/login', async (req, res) => {
  const users = readUserData();
  const user = users.find(user => user.email === req.body.email);
  if (user && await bcrypt.compare(req.body.password, user.password)) {
    // 生成 JWT
    const token = jwt.sign({ email: user.email, firstName:user.firstName }, 'your-secret-key', { expiresIn: '8h' });
    res.json({ token });
  } else {
    res.status(400).send('Invalid credentials');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});