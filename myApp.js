let express = require('express');
let app = express();

console.log("Hello World");

app.get("/",(req,res) => {
        res.sendFile(__dir+/views/index.html);
        }
)


































 module.exports = app;
