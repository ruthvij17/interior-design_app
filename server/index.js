const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;

app.listen(PORT, (req, res) => {
  console.log("Server running on port " + PORT);
});

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "pratham",
  port: "3306",
  database: "delta",
  password: "Pr@th@m19D",
});

// CREATE THE USER TABLE
app.get("/init", (req, res) => {
  q = `CREATE TABLE IF NOT EXISTS CLIENT (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(20),
    address VARCHAR(255),
    phone VARCHAR(20)
);
`;
  connection.query(q, (res, err) => {
    if (err) return console.log(err);
    console.log(res);
  });
});

// DESIGN TABLE
app.get("/initdesign", (req, res) => {
  q = `CREATE TABLE IF NOT EXISTS design (
    d_id INT AUTO_INCREMENT PRIMARY KEY,
    price decimal(10,2),
    image VARCHAR(255),
    details VARCHAR(255),
    d_rating decimal(2,1)
);
`;
  connection.query(q, (res, err) => {
    if (err) return console.log(err);
    console.log(res);
  });
});

app.get("/insertdesign", (req, res) => {
  q = `INSERT INTO design ( price, image, details, d_rating)
VALUES ( ?,?,?, ?);
`;
  connection.query(
    q,
    [
      35000,
      "https://www.andacademy.com/resources/wp-content/uploads/2024/04/feature-6.webp",
      "vintage",
      3.9,
    ],
    (res, err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(res);
    }
  );
});

app.post("/api/user/register", (req, res) => {
  console.log(req.body);
  const { username, address, password, phone } = req.body;
  q = `INSERT INTO client ( username, password, address, phone)
VALUES ( ?,?,?, ?);
`;
  connection.query(q, [username, password, address, phone], (res, err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(res);
  });
});

app.post("/api/user/login", (req, res) => {
  console.log("login");
  const { username, password } = req.body;
  //   console.log(req.body);
  q = `select * from client where username=?;`;
  connection.query(q, [username], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length > 0) {
      if (password != result[0].password) return console.log("Wrong password");
    } else {
      return res.json({ msg: "user does not exist" });
    }
    return res.json({ msg: "success" });
  });
});
