// Create web server

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/comments.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.listen(3000);

var comments = [];