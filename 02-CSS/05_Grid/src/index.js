const express = require('express');
var path = require('path');

const PORT = 5000;
const app = express();
const public = path.resolve(__dirname, '../public');

app.use(express.static(public)).listen(PORT, () =>
    console.log(`Server up on port ${PORT}`)
);