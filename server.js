var express = require('express');

var path = require('path');
var secret = require('./private.js');
var app = express();



app.get("/", function(req, res) {
  res.send("Hello world from Express!")
});

app.listen(3000, function() {
  console.log("Server running! 🌎 🌍 🌏")
});