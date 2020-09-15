const express = require("express");
const server = express();

/// serve the public folder
server.use(
    express.static("/home/safwan/Documents/fbw39/my_code/exercise")
);

const port = 2021;

server.listen(port, function () {
    console.log(`Server is listening to the port: ${port}`);
});