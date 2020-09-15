const express = require("express");
const app = express();

//serving our public folder
app.use(
  express.static(
    "/home/safwan/Documents/fbw39/live-code/04_float/CSS_Overflow_with_float/public"
  )
);

const port = 2021;
app.listen(port, function () {
  console.log(`Server is listening to the port:${port}`);
});