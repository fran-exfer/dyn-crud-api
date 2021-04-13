const { request } = require('express');
const express = require('express');
const User = require('./models/User');

const router = express.Router();

// Get all users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Post a new user
router.post('/users', async (req, res) => {
  const user = new User({
    username: req.body.username,
    fullname: req.body.fullname,
    email: req.body.email,
    address: req.body.address,
    registrationDate: req.body.registrationDate,
    status: req.body.status,
  });
  await user.save();
  res.send(user);
});

module.exports = router;
