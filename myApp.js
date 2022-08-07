require('dotenv').config();
console.log(process.env.MESSAGE_STYLE);
let express = require('express');
let app = express(); 
var bodyParser = require('body-parser');

console.log("Hello World");



app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));




app.get("/",(req,res) => {
        res.sendFile(__dirname+ "/views/index.html");
});





app.get("/json",(req,res) => {
        res.json({message: process.env.MESSAGE_STYLE =="uppercase" ? "hello json".toUpperCase() : "Hello json"});    
});





//this method is executed for every call since we have not given any end point. Then the next1 function will execute after this is done. next1 is the actual end point that is called.
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







app.get("/:word/echo", (req,res)=>{
       //res.send({echo : req.params.word})
       res.json({echo : req.params.word})
});




app.post("/name",(req,res)=>{                                                                                //name?fn=Aparnaln=Guru
        var firstName= req.body.first;
        var lastName= req.body.last;
        res.json({name: firstName+" "+ lastName})
});




//req.params.var - when sent in the link with :var
//req.query.var - when sent in the link like  //name?fn=Aparnaln=Guru
//req.body.var - when sent as json 
































 module.exports = app;
