const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "pratham",
  port: "3306",
  database: "delta",
  password: "Pr@th@m19D",
});

module.exports = connection;
