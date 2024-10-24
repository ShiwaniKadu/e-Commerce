const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const cookieParser = require("cookie-parser");

mongoose
    .connect('mongodb+srv://shivanikadu99:5faXtxp6msQ1H76E@test.jtj7e.mongodb.net/')
    .then(()=>console.log('MongoDB connected...'))
    .catch((error)=>console.log(error))
const app = express();
const PORT = process.env.PORT || 5000;
app.use(
    cors({
        origin : 'http://localhost:5173/',
        methods: ['GET','POST','DELETE','PUT'],
        allowHeaders:[
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
        ],
        Credential : true
    })
)

app.use(cookieParser());
app.use(express.json())
app.listen(PORT, ()=> console.log('Server is now running on the port $(PORT)'))

