var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); 

var app = express();

app.use('/app', express.static(path.join(__dirname, 'app')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))

app.get('/intro', function (req, res) {
    res.sendFile(__dirname + '/app/views/intro.html');
})

app.get('/types', function (req, res) {
    res.sendFile(__dirname + '/app/views/types.html');
})

app.get('/this', function (req, res) {
    res.sendFile(__dirname + '/app/views/this.html');
})

app.get('/constructors-intro', function (req, res) {
    res.sendFile(__dirname + '/app/views/constructors-intro.html');
})

app.get('/value-types', function (req, res) {
    res.sendFile(__dirname + '/app/views/value-types.html');
})

app.get('/elevator', function (req, res) {
    res.sendFile(__dirname + '/app/views/elevator.html');
})

app.get('/', (req, res) => {
    console.log('Server is listening');
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3000), function () {
console.log("SERVER RUNNING");
};