const connection = require("../Utils/SQLconnection");

const deleteMaterial = (req, res, next) => {
  const m_id = req.params.m_id;
  if (!m_id) return res.status(409).json({ msg: "bad request" });
  try {
    let q = "delete from material where m_id=?";
    connection.query(q, [m_id], (err, result) => {
      if (err) return res.status(500).json("Something went wrong");
      return res.status(200).json({ msg: "Material deleted successfully" });
    });
  } catch (err) {
    next(err);
  }
};
//PENDING
const addMaterial = (req, res, next) => {
  const materialDetails = req.body;
  const { m_name, m_qty, m_price, d_id } = materialDetails;
  if (!materialDetails) return res.status(409).json({ msg: "bad request" });
  try {
    let q = "insert into material (m_name,m_qty,m_price,d_id) values(?,?,?,?);";
    connection.query(q, [m_name, m_qty, m_price, d_id], (err, result) => {
      if (err) return res.status(500).json("Something went wrong");
      return res.status(200).json({ msg: "Material added successfully" });
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { deleteMaterial, addMaterial };
