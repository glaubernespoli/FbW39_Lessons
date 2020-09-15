const express = require("express");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

//creating the two servers
const server = express();
const liveReloadServer = livereload.createServer();

//use the MiddleWare
server.use(connectLiveReload());
server.use(express.static('public'));

//watching any change in the static assets 
liveReloadServer.watch('public');


const port = 3002;
server.listen(port, function () {
    console.log(`Server ia listening to the port: ${port}`);
});