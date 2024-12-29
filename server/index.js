const express = require("express");
const app = express();
const cors = require("cors");
const UserRoutes = require("./Routes/UserRoutes");
const DesignRoutes = require("./Routes/DesignRoutes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;

app.listen(PORT, (req, res) => {
  console.log("Server running on port " + PORT);
});

app.use("/api/user", UserRoutes);
app.use("/api/design", DesignRoutes);

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  return res.status(500).json({ message: err.message });
});
