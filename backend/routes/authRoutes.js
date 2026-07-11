const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

console.log(authController);
const {
  registerUser,
  loginUser,
} = require("../controller/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;