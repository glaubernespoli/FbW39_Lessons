const express = require('express');
const fs = require('fs');

const port = 5000;
const app = express();

app.use(
    express.static(
        '/home/glaubernespoli/workspace/dci/FbW39_Lessons/02-CSS/03_Exercise/public', {
            index: "html/index.html"
        }
    )
).get('/', (req, res) => {
    res.sendFile('/home/glaubernespoli/workspace/dci/FbW39_Lessons/02-CSS/03_Exercise/public/html/index.html');
});

fs.readdir('/home/glaubernespoli/workspace/dci/FbW39_Lessons/02-CSS/03_Exercise/public/html', (err, files) => {
    if (err) {
        console.log('Unable to scan directory: ' + err);
    }

    files.forEach(file => {
        let path = file.split('.html')[0];
        console.log(path);
        if (path !== 'index') {
            app.get(`/${path}`, (req, res) => {
                res.sendFile(`/home/glaubernespoli/workspace/dci/FbW39_Lessons/02-CSS/03_Exercise/public/html/${file}`);
            });
        }
    });
});

app.listen(port, () => console.log(`Server up on port ${port}`));