const express = require('express');
const fs = require('fs');
var path = require('path');

const port = 5000;
const app = express();
const public = path.resolve(__dirname, '../public');

fs.readdir(path.join(public, 'html'), (err, files) => {
	if (err) {
		console.log('Unable to scan html directory: ' + err);
	}

	files.forEach((file) => {
		let fileName = path.parse(file).name;
		if (fileName === 'index') {
			fileName = '';
		}
		console.log(`Creating route /${fileName}`);
		app.get(`/${fileName}`, (req, res) => {
			res.sendFile(path.join(public, 'html', file));
		});
	});
});

app.use(express.static(public)).listen(port, () =>
	console.log(`Server up on port ${port}`)
);
