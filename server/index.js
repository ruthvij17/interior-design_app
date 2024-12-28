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
    d_rating decimal(2,1),
    description varchar(255)
);
`;
  connection.query(q, (res, err) => {
    if (err) return console.log(err);
    console.log(res);
  });
});

app.get("/alterdesign", (req, res) => {
  q = `alter table design add description varchar(255);`;
  connection.query(q, (result, err) => {
    if (err) return res.json(err);
  });
});

app.get("/insertdesign", (req, res) => {
  q = `INSERT INTO design ( description)
VALUES ( ? );
`;
  connection.query(
    q,
    "Luxurious modern interior design with clean lines, neutral tones, and elegant lighting creating a warm, sophisticated ambiance.",
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
  const { username, address, password, phone, preference } = req.body;
  q = `INSERT INTO client ( username, password, address, phone,preferences)
VALUES ( ?,?,?,?,?);
`;
  connection.query(
    q,
    [username, password, address, phone, preference],
    (response, err) => {
      if (err) {
        console.log(err);
        return res.json("success");
      }
      console.log(res);
    }
  );
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

app.post("/api/design/:id/feedback", (req, res) => {
  console.log("Server");
  let { id } = req.body;
  let formDetails = req.body.formDetails.value;
  console.log(req.body);
  let q = "insert into feedback (f_description,d_id) values(?,?);";
  try {
    connection.query(q, [formDetails, id], (response, err) => {
      return res.json("success");
    });
  } catch (err) {
    console.log("Error in /api/desing/:id/feedback");
  }
});

// THIS API TAKES **design_id** AND GENERATES ITS WORKER DETAILS

app.get("/api/design/:id/workerdetail", (req, res) => {
  const { id } = req.params;
  // ONE DESIGN HAS ONLY 1 WORKER .........1 WORKER CAN HAVE MULTIPLE DESIGNS
  let q =
    "select * from worker where w_id = (select w_id from design where d_id=?)";
  try {
    connection.query(q, [id], (err, response) => {
      if (err) {
        console.log("  error in server /api/design/:id/workerdetails");
      }
      if (response.length > 0) {
        // THE DATA IS SENT TO CLIENT IN THIS FORMAT (ARRAY OF OBJECTS)
        // [
        //   {
        //     w_id: 101,
        //     name: "Ram",
        //     phone: "1234567890",
        //     address: "Kundapura",
        //     experience: 2,
        //     salary: 2000,
        //   },
        // ];
        return res.json(response);
      } else {
        console.log("No worker available for this design yet");
        return res.json("error");
      }
    });
  } catch (err) {
    next(err);
  }
});

// THIS API TAKES **design_id** AND GENERATES ITS WORKER DETAILS

app.get("/api/design/:id/materialdetail", (req, res) => {
  const { id } = req.params;
  // ONE DESIGN HAS MULTIPLE MATERIAL.........
  let q = "select * from material where d_id = ?";
  try {
    connection.query(q, [id], (err, response) => {
      if (err) {
        console.log("  error in server /api/design/:id/materialdetail");
      }
      if (response.length > 0) {
        // THE DATA IS SENT TO CLIENT IN THIS FORMAT (ARRAY OF OBJECTS)
        // [
        //   {
        //     m_id: 201,
        //     m_name: "paint",
        //     m_qty: 20,
        //     m_price: 1000,
        //     d_id: 1,
        //   },
        //   {
        //     m_id: 202,
        //     m_name: "brush",
        //     m_qty: 50,
        //     m_price: 500,
        //     d_id: 1,
        //   },
        //   {
        //     m_id: 203,
        //     m_name: "ladder",
        //     m_qty: 2,
        //     m_price: 600,
        //     d_id: 1,
        //   },
        // ];
        return res.json(response);
      } else {
        console.log("No materail available for this design yet");
        return res.json("error");
      }
    });
  } catch (err) {
    next(err);
  }
});

// THIS API TAKES **design_id** AND GENERATES THE TOTAL COST FOR THE DESIGN

app.get("/api/design/:id/totalcost", async (req, res) => {
  const { id } = req.params;
  let costDetails = {
    workerCost: 0,
    materialCost: 0,
    totalCost: 0,
  };
  try {
    // COST FOR WORKER.........

    let q = `SELECT salary FROM worker WHERE w_id = (SELECT w_id FROM design WHERE d_id = ?)`;
    connection.query(q, [id], (err, response) => {
      if (err) {
        console.log("  error in server /api/design/:id/workercost");
      }
      if (response.length > 0) {
        costDetails.workerCost = response[0].salary;
      } else {
        return res.json("error in server /api/design/:id/totalcost");
      }

      // MATERIAL COST.........

      let q1 = `select sum(m_price) as total_sum from material where d_id=?;`;
      connection.query(q1, [id], (err, response) => {
        if (err) {
          console.log("  error in server /api/design/:id/workercost");
        }
        if (response.length > 0) {
          costDetails.materialCost = Number(response[0].total_sum);
        } else {
          return res.json("error in server /api/design/:id/totalcost");
        }
        costDetails.totalCost =
          costDetails.materialCost + costDetails.workerCost;
        // DATA IS SENT TO CLIENT IN THIS FORMAT
        // {
        //     "workerCost": 2000,
        //     "materialCost": 2100,
        //     "totalCost": 4100
        // }
        return res.json(costDetails);
      });
    });
  } catch (err) {
    next(err);
  }
});

app.get("/api/design/:id", (req, res) => {
  const { id } = req.params;
  let obj;
  let q = "select * from design where d_id=?";
  try {
    connection.query(q, [id], (err, response) => {
      if (err) {
        console.log("  error in server /api/design/:id");
      }
      if (response.length > 0) {
        obj = {
          title: response[0].details,
          description: response[0].description,
          ratings: response[0].d_rating,
          image_url: response[0].image,
        };
        console.log(obj);
        return res.json(obj);
      } else {
        console.log("design not exists");
        return res.json("error");
      }
    });
  } catch (err) {
    next(err);
  }
});

app.get("/api/design", (req, res) => {
  q = "select d_id,image,details from design;";
  try {
    connection.query(q, (err, response) => {
      if (err) console.log("  error in server /api/design");
      else {
        if (response.length > 0) {
          return res.json(response);
        } else {
          console.log("error in server /api/design");
        }
      }
      console.log(response);
    });
  } catch (err) {
    next(err);
  }
});

app.post("/api/newdesign", (req, res, next) => {
  console.log("newdesign");
  try {
    let { price, image, details, d_rating, description, w_id } = req.body;
    let d_id;
    if (w_id < 101 || w_id > 105)
      return res.status(409).json({ message: "Worker id should be 101 - 105" });
    let q =
      "insert into design (price,image,details,d_rating,description,w_id) values(?,?,?,?,?,?);";
    connection.query(
      q,
      [price, image, details, d_rating, description, w_id],
      (err, result) => {
        if (err) return console.log("error in newdesign server\n" + err);
        //get design id
        else
          q = `select d_id from design where image=? and price=? and description=? and details=?`;
        connection.query(
          q,
          [image, price, description, details],
          (err, result) => {
            if (err)
              return res.status(500).json({ message: "something went wrong" });
            d_id = result;
            console.log(d_id[0].d_id);
            let { m_name, m_qty, m_price } = req.body;
            q =
              "insert into material (m_name,m_qty,m_price,d_id) values(?,?,?,?);";
            connection.query(
              q,
              [m_name, m_qty, m_price, d_id[0].d_id],
              (err, result) => {
                if (err) return res.status(500).json({ message: err });
                else
                  return res
                    .status(200)
                    .json({ message: "Design added successfully" });
              }
            );
          }
        );
      }
    );
  } catch (err) {
    next(err);
  }
});

app.delete("/api/design/:id", (req, res, next) => {
  try {
    let d_id = req.params.id;
    q = "delete from material where d_id=?";
    connection.query(q, [d_id], (err, result) => {
      if (err) return res.json(err);
      q = "delete from design where d_id=?";
      connection.query(q, [d_id], (err, response) => {
        if (err) return res.json(err);
        else res.status(200).json({ message: "Design delted sucessfully" });
      });
    });
  } catch (err) {
    next(err);
  }
});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(400).json({ message: err.message });
});
