const express = require("express");
const router = express.Router();
const {
  deleteMaterial,
  addMaterial,
} = require("../Controllers/MaterialController");

router.route("/new").post(addMaterial);
router.route("/:m_id").delete(deleteMaterial);

module.exports = router;
