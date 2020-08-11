const express = require("express");
const server = express();

//serve a static files
server.use(
    express.static(
        "/home/safwan/Documents/fbw39/FbW39_Lessons/02-CSS/03_Position", {
            index: "index.html",
        }
    )
);

const port = 2022;
server.listen(port);