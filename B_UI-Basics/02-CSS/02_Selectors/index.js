const express = require("express");
const bodyParser = require("body-parser");

const server = express();

//Serving static files in our server

server.use(
  express.static(
    "/home/safwan/Documents/fbw39/FbW39_Lessons/02-CSS/02_Selectors"
  )
);

/* 
We can change the default main index html page by using the option :
{"index":"new_page.html"}
like the code under :

server.use(
  express.static(
    "/home/safwan/Documents/fbw39/FbW39_Lessons/02-CSS/02_Selectors",{
      "index": "ex.html"
    }
  )
); 
*/


const port = 8181;
server.listen(port, function (req, res) {
  console.log(`Server is listening to the port: ${port}`);
});