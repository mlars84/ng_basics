var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var index = require('./modules/index');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/')

var port =

app.listen(port, function() {
  console.log('listening');
});
