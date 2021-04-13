const { request } = require('express');
const express = require('express');
const User = require('./models/User');

const router = express.Router();

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// Get a specific user
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.send(user);
  } catch {
    res.status(404);
    res.send({ error: "This user doesn't exist! " });
  }
});

// Post a new user
router.post('/users', async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      fullname: req.body.fullname,
      email: req.body.email,
      address: req.body.address,
      registrationDate: Date.now(),
      status: req.body.status,
    });
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// Update a user
router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });

    user.username = req.body.username;
    user.fullname = req.body.fullname;
    user.email = req.body.email;
    user.address = req.body.address;
    user.status = req.body.status;

    await user.save();
    res.send(user);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
});

// Delete a user
router.delete('/users/:id', async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "This user doesn't exist! " });
  }
});

module.exports = router;
