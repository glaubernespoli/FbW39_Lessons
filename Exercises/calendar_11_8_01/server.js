const express = require("express");
const server = express();

//serve a static files
server.use(
  express.static(
    "/home/safwan/Documents/fbw39/FbW39_Lessons/Exercises/10_8_02",
    {
      index: "calendar.html",
    }
  )
);

const port = 2021;
server.listen(port);
