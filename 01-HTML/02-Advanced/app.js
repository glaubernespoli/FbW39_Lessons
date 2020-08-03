//COMMENT : CTRL + K + C
//UN COMMENT : CTRL + K + U

// 01-simple start

// let express = require('express')
// let app = express()

// //define routes here ..

// let server = app.listen(5050, function(){console.log('Node server is running ...')})

// 02-configuring routes for HTTP requests. (GET-POST-PUT-DELETE)

// const express = require('express')
// const app = express()

// //define routes here ..

// //GET request
// app.get('/', function(req,res){
//     res.send('<h1>Hello World</h1>')
// })

// app.get('/about', function(req,res){
//     res.send('<h1>About our App</h1>')
// })


// //POST request
// app.post('/submit-student-data',function(req, res){
//     res.send('<h1>POST request ..</h1>')
// })

// //PUT request
// app.put('/update-data', function(req, res){
//     res.send('PUT request')
// })
// //DELETE request
// app.delete('/delete-data', function(req, res){
//     res.send('DELETE request ..')
// })


// const port = 5050
// let server = app.listen(port, function(){console.log('Node server is listening to port: '+port)})

// 03-Handling HTML FROM

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//USE a middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//View the HTML Form with GET request
app.get('/', function(req, res){
    res.sendFile('/home/safwan/Documents/fbw39/FbW39_Lessons/01-HTML/02-Advanced/index.html')
})

//POST (submit) request
app.post('/submit-student-data', function(req, res){
    console.log(req.body.secondname)
    res.send('Hello: '+req.body.firstname)
})



const port = 5050

let server = app.listen(port, function(){console.log('Node server is listening to port: '+port)})
