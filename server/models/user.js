const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
  email: String,
  username: String,
  phone: Number,
  address: String,
  pincode: Number,
  branch: String
});

module.exports = mongoose.model('user', userSchema, 'users');
