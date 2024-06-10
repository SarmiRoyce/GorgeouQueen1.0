const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Admin = mongoose.model("Admin", schema);
module.exports = Admin;