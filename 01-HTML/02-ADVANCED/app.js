const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

//define routes
const server = app.listen(5000, function(){
    console.log('Node server is running...');
});

app.get('/', function(req, res){
	res.sendFile('/home/glaubernespoli/workspace/dci/FbW39_Lessons/01-HTML/02-ADVANCED/index.html');
});

app.post('/', function(req, res){
    res.send('<h1>'+req.body.name+'</h1>');
});
