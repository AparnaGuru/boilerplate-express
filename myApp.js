let express = require('express');
let app = express();

console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

app.get("/",(req,res) => {
        res.sendFile(__dirname+ "/views/index.html");
});

app.get("/json",(req,res) => {
        res.json(process.env.MESSAGE_STYLE);
        if (process.env.MESSAGE_STYLE === "uppercase") {
               res.json({message: "Hello json".toUpperCase()});
                console.log(process.env.MESSAGE_STYLE);
        }   
        else  {
                console.log("hi");
               res.json({message: "Hello json"});
                
        }
});



































 module.exports = app;
