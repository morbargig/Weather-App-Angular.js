



const path = require('path')
const express = require('express')
const app = express()

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})


app.use(express.static(path.join(__dirname, 'build')))




app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

// app.use(express.static(__dirname)); // set static files location, in this case the route, add a file name if not

port = 8000



app.listen(process.env.PORT || port, () => console.log(`Running server on port ` + port))





