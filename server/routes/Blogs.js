const express = require('express')
const fs = require('fs')
const path = require('path');
const router = express.Router()

router.get("/", (req, res) => {
    try {
        const jsonFilePath = path.join(__dirname, '../data/testBlogs.json');
        const jsonData = fs.readFileSync(jsonFilePath, 'utf-8')
        const blogs = JSON.parse(jsonData)
        res.status(200).json(blogs)

      } catch (error) {
        console.error('Error reading JSON file:', error)
        res.status(500).send('Internal Server Error')
      }
});

router.get("/:id", (req, res) => {
    res.send("server")
})

router.post("/", (req, res) => {

})

module.exports = router