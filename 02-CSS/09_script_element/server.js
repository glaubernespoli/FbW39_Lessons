const express = require("express");
const server = express();

server.use(express.static("public"));

const port = 1445;
server.listen(port, function () {
  console.log(`Server is listening to the port: ${port}`);
});
