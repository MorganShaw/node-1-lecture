// brings in express so we can use it
const express = require('express');
// bring in our users.json file
const users = require('./users.json')
// instance of express invoked
const app = express();
// parsing json from our requests into javascript 
app.use(express.json());

// Endpoints!
app.get('/api/users', (req, res) => {
    res.status(200).send(users)
})

// http://localhost:4000/api/user/5
app.get('/api/user/:id', (req, res) => {
    const oneUser = users.filter( elem => elem.id === +req.params.id)
    res.status(200).send(oneUser)
})

// http://localhost:4000/api/user?email=pure3V17@chum.bkt
app.get('/api/user', (req, res) => {
    // console.log(req.query)
    const {email} = req.query
    const byEmail = users.filter( elem => elem.email === email )
    res.status(200).send(byEmail)
})


// declaring a variable for our server port on our machine
const port = 4000;
// where our server listens for requests coming into this port
app.listen(port, () => console.log(`Server listening on port ${port}`));