const express = require('express')
const cors = require('cors');
const app = express()
const PORT = 3000

const loginRoute = require('./routes/Login')
const blogsRoute = require('./routes/Blogs')
const signUpRoute = require('./routes/SignUp')

app.use(cors());
app.use("/api/v1/login", loginRoute)
app.use("/api/v1/blogs", blogsRoute)
app.use("/api/v1/register", signUpRoute)


app.listen(PORT, () => console.log("Server started on poat 3000"))