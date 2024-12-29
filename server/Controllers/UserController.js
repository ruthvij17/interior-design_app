const connection = require("../Utils/SQLconnection");

const registerUser = (req, res) => {
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
        console.log("err");
      }
      return res.json("success");
    }
  );
};

const loginUser = (req, res) => {
  console.log("login");
  const { username, password } = req.body;
  //   console.log(req.body);
  q = `select * from client where username=?;`;
  connection.query(q, [username], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length > 0) {
      if (password != result[0].password)
        return res.status(409).json({ msg: "Wrong password" });
    } else {
      return res.status(404).json({ msg: "user does not exist" });
    }
    return res.status(200).json({ msg: "success", u_id: result[0].id });
  });
};

module.exports = { registerUser, loginUser };
