const express = require("express");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");


//initialze servers
const server = express();
const liveReloadServer = livereload.createServer();

//use the Middleware functions
server.use(connectLiveReload());
server.use(express.static("dist"));


//Watching the changes int static folder 
liveReloadServer.watch("dist");

// define the express server port
const port = 1990;

// listen to the port
server.listen(port, function () {
    console.log(`Server ia listening to the port: ${port}`);
});