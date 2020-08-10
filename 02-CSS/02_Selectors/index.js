const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(express.static('/home/glaubernespoli/workspace/dci/FbW39_Lessons/02-CSS/02_Selectors'));

const port = 5000;
server.listen(port, () => console.log(`Server up on port ${port}`));