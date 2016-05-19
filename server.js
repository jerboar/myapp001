var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var user = require('./moduls/users');
var app = express();
var port = 3000;

mongoose.connect('mongodb://localhost/shero');
user.setConnection(mongoose);
/*user.create({
  'name': 'Jonh Doe',
  'email': 'jd@gmail.com',
  'phone': '555-555',
  'address': '1111 Budapest, valami u. 12.',
  'role': 3,
  'meta': {
    'birthday': new Date('1982-10-13'),
    'hobby': 'golf'
  }
}, function (saved) {
  console.log(saved);
});*/
user.read({
  'role': 5
}, function (data) {
  console.log(data);
})
app.use(express.static("build"));
app.get('/', function (req, res) {
  fs.readFile('./build/index.html', 'utf8', function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.listen(port);