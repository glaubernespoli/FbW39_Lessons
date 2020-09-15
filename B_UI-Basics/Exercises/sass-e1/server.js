const express = require("express");
const liveReload = require("livereload");
const connectLiveReload = require("connect-livereload");
const path = require("path");
//define the port that express server woulds listen to
const port = 4001;

//initialze servers
const server = express();
const liveReloadServer = liveReload.createServer();

//use Middleware functions
server.use(connectLiveReload());
// console.log(path.join(__dirname, 'public'));
server.use(express.static(path.join(__dirname, 'public')));


//Watch the changes to the files inside 'public'
liveReloadServer.watch(path.join(__dirname, 'public'));

// express server listening to it's port
server.listen(port, function () {
    console.log(`Server is listening to the port: ${port}`);
});