const express = require('express')
const app = express()
const PORT = 3000

const loginRoute = require('./routes/Login')
const blogsRoute = require('./routes/Blogs')

app.use("/api/v1/login", loginRoute)
app.use("/api/v1/blogs", blogsRoute)


app.listen(PORT, () => console.log("Server started on poat 3000"))