var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/about', function(req, res){
   res.send("About page");
});

app.get('/portfolio', function(req, res){
   res.send("Portfolio page");
});

app.get('/services', function(req, res){
   res.send("Services page");
});

app.get('/contact', function(req, res){
   res.send("Contact page");
});

app.listen(3000);
