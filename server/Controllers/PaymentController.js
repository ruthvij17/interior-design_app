const { response } = require("express");
const connection = require("../Utils/SQLconnection");

const makePayment = (req, res, next) => {
  const { u_id, d_id, total } = req.body;
  if (!(u_id && d_id)) return res.status(409).json({ msg: "Bad request" });
  let q = "insert into payment (d_id,c_id,amount) values(?,?,?)";
  try {
    connection.query(q, [d_id, u_id, total], (err, result) => {
      if (err) return res.status(500).json("Something went wrong");
      return res.status(200).json({ msg: "Payment success" });
    });
  } catch (err) {
    next(err);
  }
};

const getPaymentDetails = (req, res, next) => {
  let q = "select *from payment";
  try {
    connection.query(q, (err, result) => {
      if (err) return res.status(500).json({ msg: "Somthing went wrong" });
      return res.status(200).json(result);
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { makePayment, getPaymentDetails };
