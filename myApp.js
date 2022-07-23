require('dotenv').config();
console.log(process.env.MESSAGE_STYLE);
let express = require('express');
let app = express(); 

console.log("Hello World");
app.use("/public", express.static(__dirname + "/public"));

app.get("/",(req,res) => {
        res.sendFile(__dirname+ "/views/index.html");
});

app.get("/json",(req,res) => {
               res.json({message: process.env.MESSAGE_STYLE =="uppercase" ? "hello json".toUpperCase() : "Hello json"});    
});



































 module.exports = app;
