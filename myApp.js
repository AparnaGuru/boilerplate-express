require('dotenv').config();
console.log(process.env.MESSAGE_STYLE);
let express = require('express');
let app = express(); 

console.log("Hello World");
app.use("/public", express.static(__dirname + "/public"));


app.use((req,res,next1) => {
        var string1 = req.method + " " + req.path + " - " + req.ip;
        console.log(string1)
        next1();
});

app.get("/now",(req,res,next2) => {
        req.time = new Date().toString();
        next2();
},
(req,res)=>{                                            //we can do err handling here. Nesting middleware function inside function
        res.send({time: req.time})
});

app.get("/",(req,res) => {
        res.sendFile(__dirname+ "/views/index.html");
});

app.get("/json",(req,res) => {
        res.json({message: process.env.MESSAGE_STYLE =="uppercase" ? "hello json".toUpperCase() : "Hello json"});    
});

app.get("/:word/echo", (req,res)=>{
       //res.send({echo : req.params.word})
       res.json({echo : req.params.word})
});

app.get("/name",(req,res)=>{
        var firstName= req.query.first;
        var lastName= req.query.last;
        res.json({name: firstName+" "+ lastName})
});


































 module.exports = app;