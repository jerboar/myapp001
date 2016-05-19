var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var user = require('./moduls/users');
var app = express();
var port = 3000;
mongoose.connect('mongodb://localhost/shero')

app.use(express.static("build"));
app.get('/', function (req, res) {
  fs.readFile('./build/index.html', 'utf8', function (err, data) {
    if (err) throw err;
    res.send(data);
  });
})

app.listen(port);