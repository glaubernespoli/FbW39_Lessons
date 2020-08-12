const express = require('express');
const server = express();

//serve static files
server.use(express.static("/home/safwan/Documents/fbw39/live-code/Exercise/position-sticky"));


const port = 2025;
server.listen(port, function () {
    console.log(`Server is listning to port ${port}`);
});