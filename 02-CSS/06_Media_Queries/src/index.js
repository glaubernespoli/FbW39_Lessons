const express = require('express');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const path = require('path');

const PORT = 5000;
const app = express();
const liveReloadServer = livereload.createServer();

app.use(connectLivereload());
app.use(express.static(path.join(__dirname, '../public')));
liveReloadServer.watch(path.join(__dirname, '../public'));

app.listen(PORT, () => {
	console.log(`Server up on port ${PORT}`);
});
