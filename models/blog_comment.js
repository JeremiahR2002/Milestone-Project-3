const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  username: {type: String, ref: "username"},
  content: { type: String, default: ''}
  
})


module.exports = mongoose.model("Comment", commentSchema);
