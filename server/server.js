const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongoDB
const dbURI = 'mongodb+srv://admin:admin@fullstackblogs.nicwoda.mongodb.net/BlogAPP?retryWrites=true&w=majority';
mongoose.connect(dbURI)
  .then(result => app.listen(3000, () => console.log("Server started on poat 3000")))
  .catch(err => console.log(err))

// add routes
const loginRoute = require('./routes/Login');
const blogsRoute = require('./routes/Blogs');
const signUpRoute = require('./routes/SignUp');

app.use(cors());
app.use("/api/v1/login", loginRoute);
app.use("/api/v1/blogs", blogsRoute);
app.use("/api/v1/register", signUpRoute);

