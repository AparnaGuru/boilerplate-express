let express = require('express');
let app = express();

console.log("Hello World");

app.get("https://nodefcc-express.herokuapp.com/",(req,res){
        res.send("Hello Express");
        }
)


































 module.exports = app;
