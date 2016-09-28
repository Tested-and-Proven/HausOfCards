var mysql = require('mysql');


var connection = mysql.createConnection({
  host: "localhost",
  user: secret.mysqlUser,
  password: secret.mysqlPass,
  database: ''
});

connection.connect();

connection.end();