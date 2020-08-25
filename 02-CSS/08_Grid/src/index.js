const express = require("express");
const app = express();

app.use(
  express.static("/home/safwan/Documents/fbw39/live-code/08_Grid/public")
);

const port = 3000;
app.listen(port, function () {
  console.log(`Server is listening to the port: ${port}`);
});
