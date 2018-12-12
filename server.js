var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); 

var app = express();

app.use('/app', express.static(path.join(__dirname, 'app')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))

app.get('/intro', function (req, res) {
    res.sendFile(__dirname + '/app/views/intro/intro.html');
})

app.get('/types', function (req, res) {
    res.sendFile(__dirname + '/app/views/intro/types.html');
})

app.get('/this', function (req, res) {
    res.sendFile(__dirname + '/app/views/intro/this.html');
})

app.get('/constructors-intro', function (req, res) {
    res.sendFile(__dirname + '/app/views/intro/constructors-intro.html');
})

app.get('/value-types', function (req, res) {
    res.sendFile(__dirname + '/app/views/intro/value-types.html');
})

app.get('/elevator', function (req, res) {
    res.sendFile(__dirname + '/app/views/intro/elevator.html');
})

app.get('/getset', function (req, res) {
    res.sendFile(__dirname + '/app/views/intro/getset.html');
})

app.get('/stopwatch', function (req, res) {
    res.sendFile(__dirname + '/app/views/intro/stopwatch.html');
})

app.get('/prototype', function (req, res) {
    res.sendFile(__dirname + '/app/views/intermediate/prototype.html');
});

app.get('/property-attributes', function (req, res) {
    res.sendFile(__dirname + '/app/views/intermediate/property-attributes.html');
});

app.get('/', (req, res) => {
    console.log('Server is listening');
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3000), function () {
console.log("SERVER RUNNING");
};