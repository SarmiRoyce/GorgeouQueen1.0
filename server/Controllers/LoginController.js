const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../Models/User.model");
const beauticianModel = require("../Models/Beautician.model");
const AdminModel = require('../Models/Admin.model');

const app = express();

exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await userModel.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = jwt.sign({ email: user.email , fname: user.firstname, lname: user.lastname, id: user._id }, process.env.JWT, { expiresIn: "1d" });
        return res.json({ message: "Success", token });
      } else {
        return res.status(401).json({ message: "Password is incorrect." });
      }
    }

    let beautician = await beauticianModel.findOne({ email });
    if (beautician) {
      const isMatch = await bcrypt.compare(password, beautician.password);
      if (isMatch) {
        const token = jwt.sign({ email: beautician.email , name: beautician.name, id: beautician._id}, process.env.JWT, { expiresIn: "1d" });
        return res.json({ message: "Success beautician", token });
      } else {
        return res.status(401).json({ message: "Password is incorrect." });
      }
    }

    let admin = await AdminModel.findOne({ email });
    if (admin) {
      const isMatch = (password === admin.password);
      if (isMatch) {
        const token = jwt.sign({ email: admin.email, name: admin.name, id: admin._id}, process.env.JWT, { expiresIn: "1d" });
        return res.json({ message: "Admin_Success", token });
      } else {
        return res.status(401).json({ message: "Password is incorrect." });
      }
    }

    return res.status(404).json({ message: "User not found." });
  } catch (err) {
    return res.status(500).json({ message: "An error occurred while processing your request." });
  }
};

const verifyUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Authentication token is not available." });
  }
  jwt.verify(token, process.env.JWT, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid authentication token." });
    }
    req.user = decoded;
    next();
  });
};

app.get("/", verifyUser, (req, res) => {
  res.json("Success");
});

app.get("/Profilebeauty", verifyUser, (req, res) => {
  res.json("Success beautician");
});

app.get("/Admin", verifyUser, (req, res) => {
  res.json("Admin_Success");
});
