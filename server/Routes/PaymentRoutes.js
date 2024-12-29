const express = require("express");
const router = express.Router();
const {
  makePayment,
  getPaymentDetails,
} = require("../Controllers/PaymentController");

router.route("/").post(makePayment).get(getPaymentDetails);

module.exports = router;
