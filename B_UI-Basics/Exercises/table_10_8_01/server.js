const express = require('express');
const server = express();

//serve a static files
server.use(express.static("/home/safwan/Documents/fbw39/FbW39_Lessons/Exercises/10_8_01", {
    "index": "html/table2.html"
}));

const port = 2020;
server.listen(port)