const express = require("express");
const router = express.Router();
const {
  homePage,
  getFeedback,
  getWorkerDetails,
  getMaterialDetails,
  getTotalCost,
  getDesign,
  createDesign,
  deleteDesign,
} = require("../Controllers/DesignController");

router.route("/").get(homePage);
router.route("/:id/feedback").post(getFeedback);
router.route("/:id/workerdetail").get(getWorkerDetails);
router.route("/:id/materialdetail").get(getMaterialDetails);
router.route("/:id/totalcost").get(getTotalCost);
router.route("/:id").get(getDesign).delete(deleteDesign);
router.route("/new").post(createDesign);

module.exports = router;
