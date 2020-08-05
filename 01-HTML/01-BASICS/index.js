const express = require("express");
const bodyParser = require("body-parser");

const fBw39 = express();

//Use a middleware function to understand the request
fBw39.use(bodyParser.json()); //decode the body of the client request
fBw39.use(bodyParser.urlencoded({ extended: false })); // decode the header of the client request and nested objects are not allowed {x:{}}

//Handling GET request when the route reades '/'
fBw39.get("/", function (req, res) {
  res.sendFile(
    "/home/safwan/Documents/fbw39/FbW39_Lessons/01-HTML/01-BASICS/index.html"
  );
});

//Handling GET request when the route reads '/home'

fBw39.get("/home", function (req, res) {
  res.sendFile(
    "/home/safwan/Documents/fbw39/FbW39_Lessons/01-HTML/01-BASICS/09_html5_semantics.html"
  );
});

//Handling GET request when the route reads '/about'

fBw39.get("/about", function (req, res) {
  res.sendFile(
    "/home/safwan/Documents/fbw39/FbW39_Lessons/01-HTML/01-BASICS/about.html"
  );
});

//Handling GET request when the route reads '/contact'

fBw39.get("/contact", function (req, res) {
  res.sendFile(
    "/home/safwan/Documents/fbw39/FbW39_Lessons/01-HTML/01-BASICS/contact.html"
  );
});

//Handling POST request when the route reads '/submit'
fBw39.post("/submit", function (req, res) {
  console.log(req.body);
  let response = `
    <html>
    <head>
    <title>Thank you</title>
    <style>
    .btn{
        background-color: white;
        border: 2px solid black;
        color: green;
        padding: 5px 10px;
        text-align: center;
        margin:

    }
    </style>
    </head>
    <body>
      <h1>Welcome ${req.body.name}</h1>
      <div style="margin-bottom:20px">
      <table border="2px solid black">
        <thead style="background:#efefef">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Gende</th>
            <th>Age</th>
            <th>Birthdate</th>
            <th>Membership</th>
            <th>Favorite Transport</th>
          </tr>
         </thead>
         <tbody>
         <tr>
          <td>${req.body.name}</td>
          <td>${req.body.email}</td>
          <td>${req.body.message}</td>
          <td>${req.body.gender}</td>
          <td>${req.body.age}</td>
          <td>${req.body.bdate}</td>
          <td>${req.body.membership}</td>
          <td>${req.body.transportation}</td>
         </tr>
         </tbody>
      </table>
      </div>
    <a class="btn" style="text-decoration:none" href='/'>Home</a>
    </body>
    </html>
    `;
  res.send(response);
});

const port = 1990;
fBw39.listen(port, function () {
  console.log(`Server is listening to the port: ${port}`);
});
