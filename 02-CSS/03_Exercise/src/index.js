const express = require('express');
const fs = require('fs');

const port = 5000;
const app = express();

fs.readdir('/home/glaubernespoli/workspace/dci/FbW39_Lessons/02-CSS/03_Exercise/public/html', (err, files) => {
    if (err) {
        console.log('Unable to scan directory: ' + err);
    }

    files.forEach(file => {
        let path = file.split('.html')[0];
        console.log(path);
        if(path === 'index') {
            path = '';
        }
        app.get(`/${path}`, (req, res) => {
            res.sendFile(`/home/glaubernespoli/workspace/dci/FbW39_Lessons/02-CSS/03_Exercise/public/html/${file}`);
        });
    });
});

app.use(
    express.static(
        '/home/glaubernespoli/workspace/dci/FbW39_Lessons/02-CSS/03_Exercise/public'
    )
).listen(port, () => console.log(`Server up on port ${port}`));
