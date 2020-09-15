const express = require("express");
const server = express();


//serve the public static folder
server.use(express.static("/home/safwan/Documents/fbw39/live-code/05_CSS_Units/public"));

const port = 3037;
server.listen(port, function () {
    console.log(`Server is listening to the port: ${port}`);
});