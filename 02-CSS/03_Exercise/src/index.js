const express = require('express');

const port = 5000;
const app = express();

app.use(
    express.static(
        '/home/glaubernespoli/workspace/dci/FbW39_Lessons/02-CSS/03_Exercise/public'
    )
).get('/ex4-1', (req, res) => {
    res.sendFile(`/home/glaubernespoli/workspace/dci/FbW39_Lessons/02-CSS/03_Exercise/public/html/ex4-1.html`);
}).get('/ex4-2', (req, res) => {
    res.sendFile(`/home/glaubernespoli/workspace/dci/FbW39_Lessons/02-CSS/03_Exercise/public/html/ex4-2.html`);
}).get('/ex4-3', (req, res) => {
    res.sendFile(`/home/glaubernespoli/workspace/dci/FbW39_Lessons/02-CSS/03_Exercise/public/html/ex4-3.html`);
});

//total exercises file
const totalExercises = 5;
for (let i = 1; i <= totalExercises; i++) {
    const exNumber = i;
    app.get('/ex' + i, (req, res) => {
        res.sendFile(`/home/glaubernespoli/workspace/dci/FbW39_Lessons/02-CSS/03_Exercise/public/html/ex${exNumber}.html`);
    });
}

app.listen(port, () => console.log(`Server up on port ${port}`));