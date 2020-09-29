const express = require('express');
const nsMiddleware = require('node-sass-middleware');
const livereload = require('livereload');
const connectLR = require('connect-livereload');
const path = require('path');

const server = express();
const lrServer = livereload.createServer({
    extraExts: 'scss'
});

const PORT = 5000;
const publicPath = path.join(__dirname, '../public');
const sassFolder = path.join(__dirname, '../sass');

/* Middleware */
server.use(
    nsMiddleware({
        src: sassFolder,
        dest: path.join(publicPath, '/css'),
        debug: true,
        outputStyle: 'expanded',
        prefix: '/css',
    })
);

server.use(connectLR());
server.use(express.static(publicPath));
lrServer.watch([publicPath, sassFolder]);

server.listen(PORT, () => console.log(`Server up on port ${PORT}`));