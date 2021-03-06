const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const schema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  registrationDate: { type: Date, required: true },
  status: { type: String, required: true },
});

schema.plugin(uniqueValidator);

module.exports = mongoose.model('User', schema);
