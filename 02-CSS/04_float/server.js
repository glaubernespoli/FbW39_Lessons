const express = require("express");
const server = express();

//serve a static folder
server.use(express.static("/home/safwan/Documents/fbw39/live-code/04_float"));

const port = 3025;
server.listen(port, function () {
  console.log(`Server is listening to port: ${port}`);
});
