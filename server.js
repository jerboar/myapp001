var express = require('express');
var fs = require('fs');
var app = express();
var port = 3000;

app.get('/', function (req, res) {
    fs.readFile('./data.json', 'utf8', function (err, data) {
        if (err) throw err;
        res.send(data);
    });
})

app.listen(port);