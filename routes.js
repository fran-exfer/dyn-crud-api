const express = require('express');
const Order = require('./models/Order');

const router = express.Router();

// Get all orders
router.get('/orders', async (req, res) => {
  const posts = await Order.find();
  res.send(posts);
});

module.exports = router;
