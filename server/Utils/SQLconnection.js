const mysql = require("mysql2");
const env = require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  port: process.env.DATABSE_PORT,
  database: process.env.DATABASE_NAME,
  password: process.env.PASSWORD,
});

module.exports = connection;
