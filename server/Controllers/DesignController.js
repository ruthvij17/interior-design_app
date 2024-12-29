const connection = require("../Utils/SQLconnection");

const homePage = (req, res, next) => {
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
};

const getFeedback = (req, res) => {
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
};

const getWorkerDetails = (req, res, next) => {
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
        return res.json(response);
      } else {
        console.log("No worker available for this design yet");
        return res.json("error");
      }
    });
  } catch (err) {
    next(err);
  }
};

const getMaterialDetails = (req, res, next) => {
  const { id } = req.params;
  // ONE DESIGN HAS MULTIPLE MATERIAL.........
  let q = "select * from material where d_id = ?";
  try {
    connection.query(q, [id], (err, response) => {
      if (err) {
        console.log("  error in server /api/design/:id/materialdetail");
      }
      if (response.length > 0) {
        return res.json(response);
      } else {
        console.log("No materail available for this design yet");
        return res.json([]);
      }
    });
  } catch (err) {
    next(err);
  }
};

const getTotalCost = (req, res, next) => {
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
        return res.json(costDetails);
      });
    });
  } catch (err) {
    next(err);
  }
};

const getDesign = (req, res, next) => {
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
        q =
          "SELECT ROUND(AVG(d_rating),1) AS d_rating FROM feedback WHERE d_id = ?;";
        connection.query(q, [id], (err, result) => {
          if (err) console.log("error in server /api/design/:id");
          obj.ratings = result[0].d_rating;
          console.log(obj);
          return res.json(obj);
        });
      } else {
        console.log("design not exists");
        return res.json("error");
      }
    });
  } catch (err) {
    next(err);
  }
};

const createDesign = (req, res, next) => {
  try {
    let { price, image, details, description, w_id } = req.body;
    let d_id;
    if (w_id < 101 || w_id > 105)
      return res.status(409).json({ message: "Worker id should be 101 - 105" });
    let q =
      "insert into design (price,image,details,description,w_id) values(?,?,?,?,?);";
    connection.query(
      q,
      [price, image, details, description, w_id],
      (err, result) => {
        if (err) return console.log("error in newdesign server\n" + err);
        //get design id
        // q = `select d_id from design where image=? and price=? and description=? and details=?`;
        // connection.query(
        //   q,
        //   [image, price, description, details],
        //   (err, result) => {
        //     if (err)
        //       return res.status(500).json({ message: "something went wrong" });
        //     d_id = result;
        //     console.log(d_id[0].d_id);
        //     let { m_name, m_qty, m_price } = req.body;
        //     q =
        //       "insert into material (m_name,m_qty,m_price,d_id) values(?,?,?,?);";
        //     connection.query(
        //       q,
        //       [m_name, m_qty, m_price, d_id[0].d_id],
        //       (err, result) => {
        //         if (err) return res.status(500).json({ message: err });
        //         else
        return res.status(200).json({ message: "Design added successfully" });
        //       }
        //     );
        //   }
        // );
      }
    );
  } catch (err) {
    next(err);
  }
};

const deleteDesign = (req, res, next) => {
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
};

module.exports = {
  homePage,
  getFeedback,
  getWorkerDetails,
  getMaterialDetails,
  getTotalCost,
  getDesign,
  createDesign,
  deleteDesign,
};
