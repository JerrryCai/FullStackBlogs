const express = require('express');
const router = express.Router();

const Blog = require('../models/blog');

// retrieve all blogs
router.get("/", (req, res) => {
  Blog.find()
    .then((result) => res.send(result))
    .catch(err => console.log(err))
})


// add new blog to db test
router.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "Fourth Post",
    content: "This is the fourth post",
    category: "Travel",
    description: "A brief overview of the fourth post's content",
    author: "yang_ge_@outlook.com"
  })
  
  blog.save()
  .then((result) => res.send(result))
  .catch(err => console.log(err))
})

// retrieve blog by id
router.get("/:id", (req, res) => {
  console.log(req.params.id);
  Blog.findById(req.params.id)
    .then((result) => res.send(result))
    .catch(err => console.log(err))
})

module.exports = router