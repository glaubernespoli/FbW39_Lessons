const express = require('express');
const app = express();

app.use(express.static("/home/safwan/Documents/fbw39/live-code/07_flex/flex_align"));


const port = 2024;
app.listen(port, function () {
    console.log(`Server is listening to the port: ${port}`);

});