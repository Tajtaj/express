var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/about', function(req, res){
   res.send("About page");
});

app.get('/contact', function(req, res){
   res.send("Contact page");
});

app.listen(3000);