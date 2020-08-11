const express = require('express');

const server = express();

//serve a static files
server.use(express.static("/home/safwan/Documents/fbw39/live-code", {
    "index": "calender.html"
}));

const port = 2023;
server.listen(port, function () {
    console.log(`Server is listening to port:${port}`);
});