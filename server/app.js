//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var index = require('./modules/index');

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//base url hit
app.use('/', index);

var port = 3000;

//listen
app.listen(port, function() {
  console.log('listening on:', port);
});
