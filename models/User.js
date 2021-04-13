const mongoose = require('mongoose');

const schema = mongoose.Schema({
  username: String,
  fullname: String,
  email: String,
  address: String,
  registrationDate: Date,
  status: String,
});

module.exports = mongoose.model('User', schema);
