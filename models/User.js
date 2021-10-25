const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  gender: String,
  avatarSmall: String,
  avatar: String,
  secretToken: String,
  confirmed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports =  {
  User: model('user', userSchema)
}