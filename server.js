var express = require('express');
var fs = require('fs');
var up = require('./mymoduls/mymod1');
var app = express();
var port = 3000;

console.log(up.toUpper('hello world'));
app.use(express.static("build"));
app.get('/', function (req, res) {
    fs.readFile('./build/index.html', 'utf8', function (err, data) {
        if (err) throw err;
        res.send(data);
    });
})

app.listen(port);