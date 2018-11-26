const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const commentSchma = new Schema({
  author: {type:Schema.Types.ObjectId, ref:"User"},
  text: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Comment = mongoose.model('Comment', commentSchma);
module.exports = Comment;
