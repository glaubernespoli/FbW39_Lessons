const express = require('express');
const server = express();

//serve static files
server.use(express.static("/home/safwan/Documents/fbw39/live-code/03_Position"));


const port = 2024;
server.listen(port, function () {
    console.log(`Server is listning to port ${port}`);
});