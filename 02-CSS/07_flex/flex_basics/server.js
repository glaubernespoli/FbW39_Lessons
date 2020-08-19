const express = require('express');
const app = express();

app.use(express.static("/home/safwan/Documents/fbw39/live-code/07_flex/flex_basics"));


const port = 2023;
app.listen(port, function () {
    console.log(`Server is listening to the port: ${port}`);

});