let express = require('express');
let app = express(); 
require('dotenv').config();

console.log("Hello World");
console.log(process.env.MESSAGE_STYLE);
app.use("/public", express.static(__dirname + "/public"));

app.get("/",(req,res) => {
        res.sendFile(__dirname+ "/views/index.html");
});

app.get("/json",(req,res) => {
               res.json({message: process.env.MESSAGE_STYLE =="uppercase" ? "Hello json".toUpperCase() : "Hello json"});    
});



































 module.exports = app;
