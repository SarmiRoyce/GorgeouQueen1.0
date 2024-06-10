const express = require("express");
const router = express.Router();
const logInControl = require("../Controllers/LoginController");

router.post("/login", logInControl.LoginUser);

module.exports = router;

