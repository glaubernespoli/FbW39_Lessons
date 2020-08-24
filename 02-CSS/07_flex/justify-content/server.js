const express = require("express");
const server = express();

server.use(
  express.static("/home/safwan/Documents/fbw39/live-code/07_flex/justify-content")
);

const port = 4200;
server.listen(port, function () {
  console.log(`Server is listening to the port${port}`);
});