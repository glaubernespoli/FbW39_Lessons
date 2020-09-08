const express = require("express");
const liveReload = require("livereload");
const connectLiveReload = require("connect-livereload");

//init our both servers
const server = express();
const liveReloadServer = liveReload.createServer();

//use the middlewares
server.use(connectLiveReload());
server.use(express.static("public"));

//watch the changes in our static folder
liveReloadServer.watch("public");

const port = 4532;
server.listen(port, function () {
  console.log(`Server is listening to the port: ${port}`);
});
