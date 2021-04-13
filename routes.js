const { request } = require('express');
const express = require('express');
const Order = require('./models/Order');

const router = express.Router();

// Get all orders
router.get('/orders', async (req, res) => {
  const posts = await Order.find();
  res.send(posts);
});

// Post a new order
router.post('/orders', async (req, res) => {
  const order = new Order({
    orderId: req.body.orderId,
    country: req.body.country,
    shipDate: new Date(req.body.shipDate),
    companyName: req.body.companyName,
    status: req.body.status,
    type: req.body.type,
  });
  await order.save();
  res.send(order);
});

module.exports = router;
