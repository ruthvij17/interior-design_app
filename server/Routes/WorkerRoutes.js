const express = require("express");
const router = express.Router();
const { deleteWorker } = require("../Controllers/WorkerController");

router.route("/:id").delete(deleteWorker);

module.exports = router;
