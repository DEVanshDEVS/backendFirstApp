const express = require("express");
const app  = express();

//config from .env
// require("dotenv").config();
// const PORT = process.env.PORT || 4000;
const port = 3000;
//json parsing 
app.use(express.json());

//assign server
app.listen(port, ()=>{
    console.log(`The App is running on Port No. ${port}`);
});

//default route
app.get("/", (req, res)=>{
    res.send("<h1>This is homepage</h1>");
});