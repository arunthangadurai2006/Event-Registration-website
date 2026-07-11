const express = require("express");
const router = express.Router();

const {
  createBooking,
} = require("../controller/BookingController");

router.post("/", createBooking);

module.exports = router;