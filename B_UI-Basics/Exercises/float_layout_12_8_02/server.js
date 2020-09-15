const express = require("express");
const server = express();

//serve a static folder
server.use(express.static("/home/safwan/Documents/fbw39/float_layout/"));

const port = 3026;
server.listen(port, function () {
  console.log(`Server is listening to port: ${port}`);
});