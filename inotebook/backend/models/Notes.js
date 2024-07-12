const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Notes = new Schema({
  user:{type:mongoose.Schema.Types.ObjectId},
  title: { type: String, require: true },
  description: { type: String, require: true },
  tag: { type: String, default:"general" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('notes',Notes);