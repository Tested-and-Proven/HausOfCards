var express = require('express');
var mysql = require('mysql');
var path = require('path');
var secret = require('./private.js');
var app = express();

var connection = mysql.createConnection({
  host: "localhost",
  user: secret.mysqlUser,
  password: secret.mysqlPass,
  database: ''
});

connection.connect();

connection.end();

app.get("/", function(req, res) {
  res.send("Hello world from Express!")
});

app.listen(3000, function() {
  console.log("Server running! 🌎 🌍 🌏")
});