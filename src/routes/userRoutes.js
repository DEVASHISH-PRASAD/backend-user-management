const express = require("express");
const router = express.Router();
const {
  registration,
  loginUser,
  msg,
} = require("../controller/userController.js");

router.get("/", msg);
router.post("/register", registration);
router.post("/login", loginUser);

module.exports = router;
