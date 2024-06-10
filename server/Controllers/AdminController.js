const User = require('../Models/Admin.model');
// const bcrypt = require('bcrypt')

exports.admincreate = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email,  password});
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};