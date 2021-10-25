const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let postSchema = new Schema({
  title: String,
  description: String,
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },

  likes: [{
    type: mongoose.Types.ObjectId,
    ref: 'user'
  }],

  shares: [{
    type: mongoose.Types.ObjectId,
    ref: 'user'
  }],

  comments: [{
    type: mongoose.Types.ObjectId,
    ref: 'comment'
  }],

  mediaType: String,
  media: String
}, { timestamps: true });

module.exports =  {
  Post: model('post', postSchema)
}