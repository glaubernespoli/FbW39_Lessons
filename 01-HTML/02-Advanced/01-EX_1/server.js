const express = require('express')
const server = express()
const bodyParser = require('body-parser')

//Use a middleware function to understand the req
server.use(bodyParser.json()) // decode the body of client request
server.use(bodyParser.urlencoded({
    extended: false
})) // decode the header of client request

//View the html form with handling a GET request
server.get('/', function (req, res) {
    res.sendFile('/home/safwan/Documents/fbw39/FbW39_Lessons/01-HTML/02-Advanced/01-EX_1/contact.html')
})

//Handling the POST (submit) request
server.post('/submit', function (req, res) {
    console.log(req.body)
    let response = `<div>
    <h1>Welcome: ${req.body.name}</h1>
    <ul><li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    </ul>
   
    </div>`
    res.send(response)

})




const port = 6060
server.listen(port, function () {
    console.log(`Server is listening to port: ${port}`)
})