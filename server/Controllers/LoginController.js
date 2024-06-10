const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../Models/User.model");
const beauticianModel = require("../Models/Beautician.model");
const AdminModel = require('../Models/Admin.model')

const app = express();
exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await userModel.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = jwt.sign({ email: user.email }, process.env.JWT, { expiresIn: "1d" });
        res.cookie("token", token, { httpOnly: true });
        return res.json("Success");
      } else {
        return res.status(401).json("Password is incorrect.");
      }
    }

    let beautician = await beauticianModel.findOne({ email });
    if (beautician) {
      const isMatch = await bcrypt.compare(password, beautician.password);
      if (isMatch) {
        const token = jwt.sign({ email: beautician.email }, process.env.JWT, { expiresIn: "1d" });
        res.cookie("token", token, { httpOnly: true });
        return res.json("Success beautician");
      } else {
        return res.status(401).json("Password is incorrect.");
      }
    }

    let admin = await AdminModel.findOne({ email });
    if (admin) {
      const isMatch = (password === admin.password);
      if (isMatch) {
        const token = jwt.sign({ email: admin.email }, process.env.JWT, { expiresIn: "1d" });
        res.cookie("token", token, { httpOnly: true });
        return res.json("Admin_Success");
      } else {
        return res.status(401).json("Password is incorrect.");
      }
    }

    return res.status(404).json("User not found.");
  } catch (err) {
    return res.status(500).json("An error occurred while processing your request.");
  }
};

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
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
  res.json("Success beautuician");
});
app.get("/Admin", verifyUser, (req, res) => {
  res.json("Admin_Success");
});



exports.loginBeauti = (req, res) => {
    const { email, password } = req.body;
    beauticianModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    const data = "Success"
                    res.json(data)

                } else {
                    res.json("the password is wrong")
                }
            } else {
                res.json("no record")
            }
        })
}










