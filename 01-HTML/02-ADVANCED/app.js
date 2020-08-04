const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);

//define routes
const server = app.listen(5000, function () {
	console.log("Node server is running...");
});

app.get("/", function (req, res) {
	res.sendFile(
		"/home/glaubernespoli/workspace/dci/FbW39_Lessons/01-HTML/02-ADVANCED/about.html"
	);
});

app.post("/submit", function (req, res) {
	res.send(`<div>
	<h1>Welcome ${req.body.name}!</h1>
	<ul>
		<li><b>Name:</b> ${req.body.name}</li>
		<li><b>Email:</b> ${req.body.email}</li>
		<li><b>Message:</b> ${req.body.message}</li>
		<li><b>Gender:</b> ${req.body.gender}</li>
		<li><b>Age:</b> ${req.body.age}</li>
		<li><b>Birthdate:</b> ${req.body.birthdate}</li>
		<li><b>Membership:</b> ${req.body.membership}</li>
		<li><b>Transports I like: </b>${req.body.transport}</li>
	</ul>
</div>`);
});
