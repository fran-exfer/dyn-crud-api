const { request } = require('express');
const express = require('express');
const cors = require('cors');
const User = require('./models/User');

const router = express.Router();

// Get all users
app.options('/users', cors());
router.get('/users', cors(), async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// Get a specific user
app.options('/users/:id', cors());
router.get('/users/:id', cors(), async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.send(user);
  } catch {
    res.status(404);
    res.send({ error: "This user doesn't exist! " });
  }
});

// Post a new user
app.options('/users', cors());
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
app.options('/users/:id', cors());
router.put('/users/:id', cors(), async (req, res) => {
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
app.options('/users/:id', cors());
router.delete('/users/:id', cors(), async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "This user doesn't exist! " });
  }
});

module.exports = router;
