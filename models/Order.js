const mongoose = require('mongoose');

const schema = mongoose.Schema({
  orderId: String,
  country: String,
  shipDate: Date,
  companyName: String,
  status: String,
  type: String,
});

module.exports = mongoose.model('Order', schema);
