const express = require('express')
const app = express()

app.get("/api/v1/blogs", (req, res) => {
    res.send("server")
})

app.listen(3000, () => console.log("Server started on poat 3000"))