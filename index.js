//brings in express so we can use it.
const express = require('express');
//brings in our users.json file
const users = require('./users.json');
//instance of express invoked
const app = express();

//parsing json from our request into javascript.top level middleware
app.use(express.json());


//Endpoints! If you need res but not req, still put req in as parameter b/c res is second argument.
app.get('/api/users', (req, res) => {
    res.status(200).send(users)
})

//Colon is flag in our url saying whatever comes after user slash - will be on req.params object, and the key will be id, but the value is whatever comes in as url. Not required but common. It's not a pathname. It's just an endpoint to look for. What we're prepared to receive. Common practice to organize endpoints. 
app.get('/api/user/:id', (req, res) => {
    const oneUser = users.filter(elem => elem.id === +req.params.id)
    res.status(200).send(oneUser)
})

// http://localhost:4000/api/user?email=pure3V17@chum.bkt
app.get('/api/user', (req, res) => {
    // console.log(req.query.color)
    const {email} = req.query
    const byEmail = users.filter(elem => elem.email === email)
    res.status(200).send(byEmail)
})

//declaring a variable for our server port on our machine
const port = 4000;

//where our server listens for requests coming into this port
app.listen(port, () => console.log(`Server listening on port ${port}`))

//This is the basic structure of building a server. We'll use this pattern every time we're working with our server. For sure, lines 2, 5, and 8 every time; lines 11 and 14 sometimes - with modifications.

//The server we're creating here is an API. How?
