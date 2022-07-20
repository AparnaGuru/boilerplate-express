let express = require('express');
let app = express();

console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

app.get("/",(req,res) => {
        res.sendFile(__dirname+ "/views/index.html");
});

app.get("/json",(req,res) => {
        if(process.env.MESSAGE_STYLE=uppercase) {
               res.json({message: "Hello World".toUpperCase()});
        }   
        else  {
               res.json({message: "Hello World"});
        }
});



































 module.exports = app;
