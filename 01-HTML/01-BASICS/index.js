import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('/home/glaubernespoli/workspace/dci/FbW39_Lessons/01-HTML/01-BASICS/static'));

app.get('/', (req, res) => {
    res.sendFile('/home/glaubernespoli/workspace/dci/FbW39_Lessons/01-HTML/01-BASICS/index.html');
});

app.get('/home', (req, res) => {
    res.sendFile('/home/glaubernespoli/workspace/dci/FbW39_Lessons/01-HTML/01-BASICS/09_html5_semantics.html');
});

app.get('/about', (req, res) => {
    res.sendFile('/home/glaubernespoli/workspace/dci/FbW39_Lessons/01-HTML/01-BASICS/about.html');
});

app.get('/contact', (req, res) => {
    res.sendFile('/home/glaubernespoli/workspace/dci/FbW39_Lessons/01-HTML/01-BASICS/contact.html');
});

app.post('/submit', (req, res) => {
    const body = req.body;
    console.table(body);

    const result = `<h1>Welcome ${body.name}!</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Birthdate</th>
                                <th>Membership</th>
                                <th>Transports I Like</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${body.name}</td>
                                <td>${body.email}</td>
                                <td>${body.message}</td>
                                <td>${body.gender}</td>
                                <td>${body.age}</td>
                                <td>${body.bdate}</td>
                                <td>${body.membership}</td>
                                <td>${body.transportation}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" onclick="window.location='/home'">Back</button>`;
    res.send(result);
});

const port = 5000;
app.listen(port, () => console.log(`Server up on port ${port}`));